const router = require("express").Router();
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");
router
  .route("/")
  .post(authController.protect, messageController.create)
  .get(authController.protect, messageController.getUnseenMessageCount);
router
  .route("/:conversationId")
  .get(authController.protect, messageController.getMessages)
  .patch(authController.protect, messageController.markMessageRead);
module.exports = router;
