const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const presetController = require("../controllers/presetController");

router
  .route("/")
  .post(authController.protect, presetController.createAndUpdate)
  .get(authController.protect, presetController.getPreset);

module.exports = router;
