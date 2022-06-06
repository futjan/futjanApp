const router = require("express").Router();
const messageController = require("../controllers/messageController");
const authController = require("../controllers/authController");
router.route("/").post(authController.protect, messageController.create);
router
  .route("/:conversationId")
  .get(authController.protect, messageController.getMessages);
module.exports = router;
