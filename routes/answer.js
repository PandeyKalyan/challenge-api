const express = require("express");
const router = express.Router();

const {
    create,
    upvote,
    downvote
} = require("../controllers/answer");
const { requireSignin, isAuth } = require("../controllers/auth");

router.post("/answer", requireSignin, isAuth, create);
router.post("/answer/:answer_id/upvote", requireSignin, isAuth, upvote);
router.post("/answer/:answer_id/downvote", requireSignin, isAuth, downvote)

module.exports = router;
