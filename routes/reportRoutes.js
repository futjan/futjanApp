const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const reportController = require("../controllers/reportController");

router
  .route("/")
  .post(authController.protect, reportController.createReport)
  .get(authController.protect, reportController.getReports);

router
  .route("/:id")
  .get(authController.protect, reportController.getReportById);
module.exports = router;
