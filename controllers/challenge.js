const Challenge = require('../models/challenge');
const { errorHandler } = require('../helpers/db-error-handler');

exports.create = (req, res) => {
    console.log(req.auth)
    const challenge = new Challenge({...req.body, "created_by": req.auth._id});
    challenge.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(data);
    });
};

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
