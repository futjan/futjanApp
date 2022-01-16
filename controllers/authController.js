const User = require("../models/User");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const crypto = require("crypto");
const { promisify } = require("util");
const sendEmail = require("../utils/email");

// @route               POST /api/v1/user/signup
// @desc                create new user
// @access              Public
exports.signup = async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
};

// @route               POST /api/v1/user/login
// @desc                login user
// @access              Public
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // 1) check if email and password exist
  if (!email || !password) {
    return next(new AppError("email and password is required!", 400));
  }
  // 2) check if user exist and password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !user.correctPassword(password, user.password)) {
    return next(new AppError("username or password incorrect!", 400));
  }
  // 3) if everything OK then send token to user
  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });

  res.status(200).json({
    status: "success",
    token,
  });
};

// Protected Route

exports.protect = async (req, res, next) => {
  let token;
  // 1) getting token and check if token exist
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // 2) verify token

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) check user still exist
  const currentUser = await User.findById(decode.id);
  if (!currentUser) {
    return next(new AppError("User not exist", 404));
  }
  // 4) check password does'nt change after the token issued

  if (currentUser.changedPassword(decode.iat)) {
    return next(
      new AppError("user recently changed password Please login again", 400)
    );
  }

  // grant access to protected routes
  req.user = currentUser;

  next();
};

// @route         POST /api/v1/user/forgetPassword
// @desc          send reset password token
// @access        Public
exports.forgetPassword = async (req, res, next) => {
  // get user based on email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send("user not exist with this email");
  }

  // generate reset token
  const resetToken = await user.resetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // 3) send it to user's email

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/user/resetPassword/${resetToken}`;

  const message = `Forget your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}`;

  await sendEmail({
    email: user.email,
    subject: "Your password reset token only valid for 10 min",
    message,
  });
  res.status(200).json({
    status: "success",
    message: "token sent to email",
  });
};

// @route         POST /api/v1/user/resetPassword
// @desc          reset password
// @access        Public
exports.resetPassword = async (req, res, next) => {
  // 1) Get user base on token
  console.log(req.params.token);
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  console.log(hashedToken);
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) if token has not expired, and there is user , set the new password
  if (!user) {
    return res.status(400).send("token is invalud or has expired");
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  res.status(200).json({
    status: "success",
    message: "password successfully changed!",
  });
};

// @route         POST /api/v1/user/updatePassword
// @desc          update password
// @access        Private
exports.updatePassword = async (req, res, next) => {
  // 1) get user from collection
  const user = await User.findById(req.user.id).select("+password");

  // 2) check if posted current password is correct
  if (
    !user ||
    !(await user.correctPassword(req.body.currentPassword, user.password))
  ) {
    return res.status(400).send("user not valid");
  }
  // 3) if so. update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  res.status(201).json({
    status: "success",
    message: "user successfully update password!",
  });
};
