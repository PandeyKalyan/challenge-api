const express = require("express");
const router = express.Router();

const {
    profile
} = require("../controllers/user");
const { requireSignin, isAuth } = require("../controllers/auth");

router.get("/profile", requireSignin, isAuth, profile);

module.exports = router;
