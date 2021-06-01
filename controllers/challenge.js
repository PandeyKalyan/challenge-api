const Challenge = require('../models/challenge');
const TopChallenge = require('../models/top-challenges');
const { errorHandler } = require('../helpers/db-error-handler');

exports.create = (req, res) => {
    const challenge = new Challenge({...req.body, "created_by": req.auth._id});
    challenge.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.list = (req, res) => {
    Challenge.find().populate('answers').exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.topTen = (req, res) => {
    TopChallenge.find().populate('challenges').exec((err, data) => {
        res.json(data);
    })
}
