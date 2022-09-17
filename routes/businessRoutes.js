const router = require("express").Router();
const fileController = require("../controllers/fileController");
const businessController = require("../controllers/businessController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(
    authController.protect,
    fileController.uploadFile,
    businessController.validate,
    fileController.resizeImage,
    businessController.create
  )
  .get(businessController.getAllBusiness);
// get admin-only surplus
router.route("/admin-only").get(businessController.getAdminBusiness);

// surplus belongs to current user
router
  .route("/current-user-surplus")
  .get(authController.protect, businessController.getAllCurrentUserBusiness);
router.patch(
  "/activate",
  authController.protect,
  businessController.businessActivate
);
router.patch("/views", businessController.updateViews);
// router.post(
//   "/upload",
//   authController.protect,
//   fileController.resizeImage
// );
// delete and find one
router.patch(
  "/delete-file",
  authController.protect,
  fileController.deleteFileFromS3,
  businessController.updateBusinessImage
);

router
  .route("/:id")
  .get(businessController.getBusiness)
  .patch(
    authController.protect,
    businessController.validate,
    fileController.uploadFile,
    fileController.resizeImage,
    businessController.updateBusiness
  )
  .delete(authController.protect, businessController.deleteBusiness);

module.exports = router;
