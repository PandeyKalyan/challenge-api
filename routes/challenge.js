const express = require("express");
const router = express.Router();

const {
    create,
    list
} = require("../controllers/challenge");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.post("/challenge/create", requireSignin, isAuth, create);
router.get("/challenges", requireSignin, isAuth, list);

module.exports = router;
