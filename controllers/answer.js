const Answer = require('../models/answer');
const User = require('../models/user');
const Challenge = require('../models/challenge')
const { errorHandler } = require('../helpers/db-error-handler');
const {calculateUserLevel, canUserDownvote} = require('../helpers/user-skill-helper');
const { increaseUserUpvotes, increaseUserDownvotes } = require('../jobs/user-skill-calculator-job');

exports.create = (req, res) => {
    const challenge_id = req.body.challenge_id;
    if(!challenge_id) {
        return res.status(400).json({
            error: "Not a valid challenge"
        });
    }
    const answer = new Answer({...req.body, "answered_by": req.auth._id});

    answer.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        Challenge.findByIdAndUpdate(
            challenge_id, 
            {$push: { "answers": data._id }},
            (err, success) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                }
                res.json(data)
            });
    });
};

exports.upvote = (req, res) => {
    const answer_id = req.params.answer_id;

    Answer.findByIdAndUpdate(
        answer_id,
        {$inc: { upvotes: 1 }},
        {returnOriginal: false},
        (err, data) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            process.nextTick(() => increaseUserUpvotes(data.answered_by))
            res.json(data);
        }
    )
}

exports.downvote = (req, res) => {
    const answer_id = req.params.answer_id;

    User.findById(req.auth._id, 'upvotes downvotes').exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        let {upvotes, downvotes} = user
        if(!canUserDownvote(calculateUserLevel(upvotes, downvotes))) {
            return res.status(400).json({
                error: "Not enough level reached to downvote"
            });
        }
        Answer.findByIdAndUpdate(
            answer_id,
            {$inc: { downvotes: 1 }},
            {returnOriginal: false},
            (err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                process.nextTick(() => increaseUserDownvotes(data.answered_by))
                res.json(data);
            }
        )

    })
}

exports.list = (req, res) => {
    Challenge.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
