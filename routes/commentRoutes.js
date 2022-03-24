const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const commentController = require("../controllers/commentController");

router
  .route("/")
  .post(authController.protect, commentController.create)
  .get(commentController.getCommetns);

module.exports = router;
