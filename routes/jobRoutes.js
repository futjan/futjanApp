const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const jobController = require("../controllers/jobController");
const fileController = require("../controllers/fileController");

router
  .route("/")
  .post(
    authController.protect,
    fileController.uploadFile,
    jobController.validateJob,
    fileController.resizeImage,
    jobController.create
  )
  .get(jobController.getJobs);
router.patch("/activate", jobController.jobActivate);
router.get("/admin-only", jobController.getAdminJobs);
router.get(
  "/current-user-job",
  authController.protect,
  jobController.getAllCurrentUserJobs
);
router.patch(
  "/delete-image",
  fileController.deleteFileFromS3,
  jobController.updateJobImage
);
router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(
    authController.protect,
    fileController.uploadFile,
    fileController.resizeImage,
    jobController.updateJob
  )
  .delete(authController.protect, jobController.deleteJob);

module.exports = router;
