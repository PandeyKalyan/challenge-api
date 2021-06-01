const User = require('../models/user');
const { errorHandler } = require('../helpers/db-error-handler');
const {calculateUserLevel} = require('../helpers/user-skill-helper');

exports.profile = (req, res) => {
    User.findById(req.auth._id).lean().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        data.level = calculateUserLevel(data.upvotes, data.downvotes);
        res.json(data);
    });
};