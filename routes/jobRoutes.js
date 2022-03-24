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

router.get(
  "/current-user-job",
  authController.protect,
  jobController.getAllCurrentUserJobs
);
router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(authController.protect, jobController.updateJob)
  .delete(authController.protect, jobController.deleteJob);

module.exports = router;
