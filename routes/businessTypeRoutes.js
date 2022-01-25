const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const businessTypeController = require("../controllers/businessTypeController");

// create and get all
router
  .route("/")
  .post(authController.protect, businessTypeController.create)
  .get(authController.protect, businessTypeController.getAllType);

// delete
router
  .route("/:id")
  .delete(authController.protect, businessTypeController.deleteType);

module.exports = router;
