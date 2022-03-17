const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const jobSeekerController = require("../controllers/jobSeekerController");

router
  .route("/")
  .post(
    authController.protect,
    // fileController.uploadFile,
    // jobSeekerController.validateJob,
    // fileController.resizeImage,

    jobSeekerController.create
  )
  .get(jobSeekerController.getJobSeekers);

router
  .route("/:id")
  .get(jobSeekerController.getJobSeekerById)
  .patch(jobSeekerController.updateJobSeeker)
  .delete(jobSeekerController.deleteJobSeeker);

module.exports = router;
