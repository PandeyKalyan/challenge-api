const express = require("express");
const router = express.Router();

const {
    create,
    list,
    topTen
} = require("../controllers/challenge");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.post("/challenge/create", requireSignin, isAuth, create);
router.get("/challenges", requireSignin, isAuth, list);
router.get("/challenge/top", requireSignin, isAuth, topTen)

module.exports = router;
