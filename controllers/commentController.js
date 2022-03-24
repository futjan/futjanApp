const Comment = require("../models/Comment");
const Job = require("../models/Job");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                   POST /api/v1/comments
// @desc                    create comment
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  if (!req.body.comment.trim()) {
    return next(
      new AppError("Fields Required", 400, {
        comment: "comment is required",
      })
    );
  }
  const comment = await Comment.create({
    comment: req.body.comment,
    job: req.body.job,
    user: req.user._id.toString(),
  });

  if (!comment) {
    return next(new AppError("comment not create", 400, undefined));
  }
  const job = await Job.findById(req.body.job).populate("comments");

  // check surplux exist or not
  if (!job) {
    return next(new AppError("Job not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    job,
  });
});

// @route                   GET /api/v1/comments
// @desc                    get comments
// @access                  Public

exports.getCommetns = catchAsync(async (req, res, next) => {
  const comments = await Comment.find({});

  if (!comments) {
    return next(new AppError("comments not found", 404, undefined));
  }

  res.status(200).json({
    status: "success",
    data: {
      comments,
    },
  });
});
