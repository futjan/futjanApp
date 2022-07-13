const router = require("express").Router();
const favouriteController = require("../controllers/favouriteController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(authController.protect, favouriteController.create)
  .get(authController.protect, favouriteController.getFavourites);
router.route("/:id").delete(authController.protect, favouriteController.delete);
module.exports = router;
