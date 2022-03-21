const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// signup route
router.post("/signup", authController.signup);
// login route
router.post("/login", authController.login);
// forget password route
router.post("/forgetPassword", authController.forgetPassword);
// reset password route
router.post("/resetPassword/:token", authController.resetPassword);
// change password
router.post(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);
router
  .route("/current-user")
  .get(authController.protect, authController.getCurrentUser)
  .patch(authController.protect, userController.updateCurrentUser);
module.exports = router;
