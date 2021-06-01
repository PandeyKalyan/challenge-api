const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const topChallengeSchema = new mongoose.Schema(
    {
        challenges: [{ type: ObjectId, ref: 'Challenge' }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('TopChallenge', topChallengeSchema);