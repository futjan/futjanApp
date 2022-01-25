const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// signup route
router.post("/signup", authController.signup);
// login route
router.post("/login", authController.login);
// forget password route
router.post("/forgetPassword", authController.forgetPassword);
// reset password route
router.post("/resetPassword/:token", authController.resetPassword);
// change password
router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);
module.exports = router;
