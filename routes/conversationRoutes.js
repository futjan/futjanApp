const router = require("express").Router();
const conversationController = require("../controllers/conversationController");
const authController = require("../controllers/authController");
router
  .route("/")
  .post(authController.protect, conversationController.create)
  .get(authController.protect, conversationController.getConversation);

module.exports = router;
