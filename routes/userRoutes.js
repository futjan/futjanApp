const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const passport = require("../controllers/socialLogin");

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
router.get("/all-users", authController.getAllUsers);
router.route("/ads/:userID").get(userController.userAds);
router.patch("/deleted/:id", authController.deletedUser);
router.patch("/blocked/:id", authController.blockedUser);
router.route("/:id").get(authController.getUserById);

// social login
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
module.exports = router;
