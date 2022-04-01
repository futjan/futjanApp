const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const paymentController = require("../controllers/paymentController");

// get session token
router.post("/checkout", authController.protect, paymentController.paymentAPI);
router.get(
  "/checkout-session/:id",
  authController.protect,
  paymentController.checkoutSessions
);

module.exports = router;
