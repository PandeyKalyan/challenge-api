const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const answerSchema = new mongoose.Schema(
    {
        answer: {
            type: String,
            required: true
        },
        upvotes: {
            type: Number,
            default: 0
        },
        downvotes: {
            type: Number,
            default: 0
        },
        answered_by: {type: ObjectId, ref: 'User'}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Answer', answerSchema);