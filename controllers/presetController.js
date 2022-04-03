const Preset = require("../models/Preset");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                   POST /api/v1/preset
// @desc                    create perset by user
// @access                  Private
exports.createAndUpdate = catchAsync(async (req, res, next) => {
  const preset = await Preset.findOneAndUpdate(
    { user: req.user.id.toString() },
    req.body,
    { new: true, upsert: true }
  );

  if (!preset) {
    next(new AppError("error", 400, undefined));
  }

  res.status(201).json({
    status: "success",
    preset,
  });
});

// @route                   GET /api/v1/preset
// @desc                    get preset by user
// @access                  Private
exports.getPreset = catchAsync(async (req, res, next) => {
  const preset = await Preset.findOne({ user: req.user.id.toString() }).select(
    "-user -createdAt -__v"
  );

  if (!preset) {
    return next(new AppError("preset not found", 400, undefined));
  }

  res.status(200).json({
    status: "succee",
    preset,
  });
});
