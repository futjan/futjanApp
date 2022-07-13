const router = require("express").Router();
const conversationController = require("../controllers/conversationController");
const authController = require("../controllers/authController");
router
  .route("/")
  .post(authController.protect, conversationController.create)
  .get(authController.protect, conversationController.getConversations);

router
  .route("/single/:reveiverId/:adId")
  .get(authController.protect, conversationController.getConversation);
router
  .route("/user/:id")
  .get(authController.protect, conversationController.getUser);
module.exports = router;
