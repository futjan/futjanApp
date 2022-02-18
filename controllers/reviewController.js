const Review = require("../models/Review");
const SurplusBusiness = require("../models/SurplusBusiness");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                   POST /api/v1/review
// @desc                    create review
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  if (!req.body.review.trim() || !req.body.rating) {
    return next(
      new AppError("Fields Required", 400, {
        review: "review is required",
        rating: "rating is required",
      })
    );
  }
  const review = await Review.create({
    review: req.body.review,
    rating: req.body.rating,
    surplus: req.body.surplus,
    user: req.user._id.toString(),
  });

  if (!review) {
    return next(
      new AppError(
        "Review not create please check your internet connection",
        400,
        undefined
      )
    );
  }
  const surplus = await SurplusBusiness.findById(req.body.surplus).populate(
    "reviews"
  );

  // check surplux exist or not
  if (!surplus) {
    return next(new AppError("Surplus not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    surplus,
  });
});

// @route                   GET /api/v1/review
// @desc                    get review
// @access                  Public

exports.getReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find({});

  if (!reviews) {
    return next(new AppError("Reviews not found", 404, undefined));
  }

  res.status(200).json({
    status: "success",
    data: {
      reviews,
    },
  });
});
