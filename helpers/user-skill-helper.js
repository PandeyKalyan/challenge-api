exports.calculateUserLevel = (upvotes, downvotes) => {
    return Math.floor(upvotes/10) - Math.floor(downvotes/5);
}

exports.canUserDownvote = (level) => level >= 10;