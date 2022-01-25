const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const surplusController = require("../controllers/surplusController");

// create , get and update surplux

router
  .route("/")
  .post(authController.protect, surplusController.createSurplus)
  .get(authController.protect, surplusController.getAllSurplus)
  .patch(authController.protect, surplusController.updateSurplus);
// delete and find one
router
  .route("/:id")
  .get(authController.protect, surplusController.getSurplus)
  .delete(authController.protect, surplusController.deleteSurplus);

module.exports = router;
