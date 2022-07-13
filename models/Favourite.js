const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// review Schema
const favouriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: [true, "review must belong to a user"],
    },
    ad: {
      type: mongoose.Schema.ObjectId,
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

// favouriteSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "ad",
//     select: "title active category images deleted adType",
//   });
//   next();
// });

module.exports = Report = mongoose.model("favourite", favouriteSchema);
