const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const jobController = require("../controllers/jobController");
const fileController = require("../controllers/fileController");

router
  .route("/")
  .post(authController.protect, jobController.create)
  .get(jobController.getJobs);

router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(authController.protect, jobController.updateJob)
  .delete(authController.protect, jobController.deleteJob);

module.exports = router;
