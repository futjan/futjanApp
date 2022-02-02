const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const reviewController = require("../controllers/reviewController");

router
  .route("/")
  .post(authController.protect, reviewController.create)
  .get(reviewController.getReviews);

module.exports = router;
