const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const challengeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        difficulty: {
            type: String,
            default: "easy",
            enum: ["easy", "medium", "hard"] // enum means string objects
        },
        created_by: {type: ObjectId, ref: 'User', required: true},
        answers: [{ type: ObjectId, ref: 'Answer' }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Challenge', challengeSchema);