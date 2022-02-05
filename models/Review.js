const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// review Schema
const reviewSchema = Schema(
  {
    review: {
      type: String,
      required: [true, "review is required"],
    },
    rating: {
      type: Number,
      required: [true, "rating is required"],
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: [true, "review must belong to a user"],
    },
    surplus: {
      type: mongoose.Schema.ObjectId,
      ref: "surplus",
      required: [true, "review must belong to a surplus"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

reviewSchema.pre(/^find/, function (next) {
  //   this.populate({
  //     path: "surplus",
  //     select: "name",
  //   }).
  this.populate({
    path: "user",
    select: "name",
  });

  next();
});

module.exports = Review = mongoose.model("Review", reviewSchema);
