const Favourite = require("../models/Favourite");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
// @route                   POST /api/v1/favourite
// @desc                    create favourite
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  const favourite = await Favourite.findOneAndUpdate(
    {
      user: req.user.id,
      ad: req.body.adId,
    },
    {
      user: req.user.id,
      ad: req.body.adId,
      onModel: req.body.model,
    },
    { new: true, upsert: true }
  );

  if (!favourite) {
    return next(new AppError("favourite not created", 400, undefined));
  }
  res.status(201).json({
    status: "success",
    favourite,
  });
});

// @route                       GET /api/v1/favourite
// @desc                        get favourites
// @access                      Private
exports.getFavourites = catchAsync(async (req, res, next) => {
  const favourites = await Favourite.find({
    user: req.user._id.toString(),
  }).populate({
    path: "ad",
    match: {
      deleted: false,
      active: true,
    },
    select: {
      title: 1,
      country: 1,
      adType: 1,
      images: 1,
    },
  });

  if (!favourites) {
    return next(new AppError("Favourite not found"));
  }
  res.status(200).json({
    status: "success",
    favourites,
  });
});

// @route                           DELETE /api/v1/favourite/:id
// @desc                            delete favourite by id
// @access                          Private
exports.delete = catchAsync(async (req, res, next) => {
  const favourite = await Favourite.findByIdAndDelete(req.params.id);

  if (!favourite) {
    return next(new AppError("favourite not found"));
  }

  res.status(200).json({
    status: "success",
    favourite,
  });
});
