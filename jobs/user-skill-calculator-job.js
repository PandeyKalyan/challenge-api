const User = require("../models/user")

exports.increaseUserUpvotes = (user_id) => {
    User.findByIdAndUpdate(user_id, {$inc: {upvotes: 1}}, (err, data) => {
        return
    })
}


exports.increaseUserDownvotes = (user_id) => {
    User.findByIdAndUpdate(user_id, {$inc: {downvotes: 1}}, (err, data) => {
        return
    })
}