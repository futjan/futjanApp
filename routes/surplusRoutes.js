const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const surplusController = require("../controllers/surplusController");
const fileController = require("../controllers/fileController");

// create , get and update surplux

router
  .route("/")
  .post(
    authController.protect,
    fileController.uploadFile,
    fileController.resizeImage,
    surplusController.createSurplus
  )
  .get(surplusController.getAllSurplus)
  .patch(
    authController.protect,
    fileController.uploadFile,
    fileController.resizeImage,
    surplusController.updateSurplus
  );
// get surplus name
router.route("/keyword").get(surplusController.surplusKeyword);
// surplus belongs to current user
router
  .route("/current-user-surplus")
  .get(authController.protect, surplusController.getAllCurrentUserSurplus);
router.patch(
  "/activate",
  authController.protect,
  surplusController.surplusActivate
);

// router.post(
//   "/upload",
//   authController.protect,
//   fileController.resizeImage
// );
// delete and find one

router
  .route("/:id")
  .get(surplusController.getSurplus)
  .delete(authController.protect, surplusController.deleteSurplus);
module.exports = router;
