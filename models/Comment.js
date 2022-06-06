const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// comment schema
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, "comment is required"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: [true, "comment must be belong to a user"],
    },
    job: {
      type: mongoose.Schema.ObjectId,
      ref: "jobs",
      required: [true, "comment must be belong to a job"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
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

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  });
  next();
});

module.exports = Comment = mongoose.model("comments", commentSchema);
