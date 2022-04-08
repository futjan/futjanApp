const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const jobSeekerController = require("../controllers/jobSeekerController");
const fileController = require("../controllers/fileController");

router
  .route("/")
  .post(
    authController.protect,
    fileController.uploadFile,
    jobSeekerController.validateJobSeeker,
    fileController.resizeImage,
    jobSeekerController.create
  )
  .get(jobSeekerController.getJobSeekers);

router.get(
  "/current-user",
  authController.protect,
  jobSeekerController.getPrivateJobSeeker
);
router
  .route("/:id")
  .get(jobSeekerController.getJobSeekerById)
  .patch(jobSeekerController.updateJobSeeker)
  .delete(jobSeekerController.deleteJobSeeker);

module.exports = router;
