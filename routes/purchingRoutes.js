const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const paymentController = require("../controllers/paymentController");

// get session token
router.get(
  "/checkout-session/:id",
  authController.protect,
  paymentController.checkoutSessions
);

module.exports = router;
