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
router.get("/admin-only", jobSeekerController.getAdminJobSeekers);
router.patch("/activate", jobSeekerController.jobSeekerActivate);
router.patch("/views", jobSeekerController.updateViews);

router.get(
  "/current-user",
  authController.protect,
  jobSeekerController.getPrivateJobSeeker
);
// delete file from aws
router.patch(
  "/delete-file",
  authController.protect,
  fileController.deleteFileFromS3,
  jobSeekerController.updateJobSeekerFile
);
router
  .route("/:id")
  .get(jobSeekerController.getJobSeekerById)
  .patch(
    authController.protect,
    fileController.uploadFile,
    fileController.resizeImage,
    jobSeekerController.updateJobSeeker
  )
  .delete(authController.protect, jobSeekerController.deleteJobSeeker);

module.exports = router;
