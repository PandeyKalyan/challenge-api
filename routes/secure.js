const express = require("express");
const router = express.Router();

const {
    requireSignin,
    isAuth
} = require("../controllers/auth");

router.get("/secure", requireSignin, isAuth, (req, res) => {
    return res.json({"message": "Wow, into a secure route"})
});
module.exports = router;
