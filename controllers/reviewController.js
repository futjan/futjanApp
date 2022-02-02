const Review = require("../models/Review");
const AppError = require("../utils/appError");
const mongoose = require("mongoose");

// @route                   POST /api/v1/review
// @desc                    create review
// @access                  Private
exports.create = async (req, res, next) => {
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

  res.status(201).json({
    status: "success",
    data: {
      review,
    },
  });
};

// @route                   GET /api/v1/review
// @desc                    get review
// @access                  Public

exports.getReviews = async (req, res, next) => {
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
};
