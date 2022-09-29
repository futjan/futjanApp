const router = require("express").Router();
const contactController = require("../controllers/contactController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(contactController.validate, contactController.create)
  .get(authController.protect, contactController.getContacts);

router
  .route("/:id")
  .delete(authController.protect, contactController.deleteContact);

module.exports = router;
