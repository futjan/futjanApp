const express = require("express");
const router = express.Router();
const passport = require("../controllers/socialLogin");

router.get("/google/callback", passport.authenticate("google"));

module.exports = router;
