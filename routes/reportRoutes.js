const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const reportController = require("../controllers/reportController");

router
  .route("/")
  .post(reportController.createReport)
  .get(reportController.getReports);

router.route("/:id").get(reportController.getReportById);
module.exports = router;
