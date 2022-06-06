const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// review Schema
const reportSchema = new Schema(
  {
    reason: {
      type: String,
      required: [true, "reason is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
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
    ad: {
      type: mongoose.Schema.ObjectId,
      // required: [true, "report must belong to a surplus"],
      required: true,
      refPath: "onModel",
    },
    onModel: {
      type: String,
      required: true,
      enum: ["surplus", "jobs", "jobseekers"],
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

reportSchema.pre(/^find/, function (next) {
  this.populate({
    path: "ad",
    select: "title active category images",
  });
  // .populate({
  //   path: "user",
  //   select: "name",
  // });

  next();
});

module.exports = Report = mongoose.model("report", reportSchema);
