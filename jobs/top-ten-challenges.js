const cron = require('node-cron');
const Challenge = require('../models/challenge');
const TopChallenge = require('../models/top-challenges');

let top_ten_challenge_job = () => {
    cron.schedule('* * * * *', () => {
        Challenge.aggregate(
            [
                { "$project": {
                    "answers": 1,
                    "length": { "$size": "$answers" }
                }},
                { "$sort": { "length": -1 } },
                { "$limit": 10 }
            ],
            function(err,results) {
                if(err) {
                    return
                }
                TopChallenge.updateOne({}, {challenges: results.map(res => res._id)}, {upsert: true}, function(err, data) {
                    return;
                });
            }
        )
    })
};

module.exports = top_ten_challenge_job;