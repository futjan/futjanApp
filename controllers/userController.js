const User = require("../models/User");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const isEmpty = require("../validation/is-empty");
const validateRegisterInput = require("../validation/register");

// @route                   PATCH /api/v1/users/current-user
// @desc                    update current user
// @access                  Private
exports.updateCurrentUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
  });

  if (!user) {
    next(new AppError("user could not update", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
