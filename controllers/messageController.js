const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Message = require("../models/Message");

// @route                               POST /api/v1/messages
// @desc                                create message
// @access                              private
exports.create = catchAsync(async (req, res, next) => {
  const message = await Message.create({
    conversationId: req.body.conversationId,
    sender: req.user._id,
    text: req.body.text,
  });

  if (!message) {
    return new AppError("message not send", 400, undefined);
  }

  res.status(201).json({
    message,
  });
});

// @route                               GET /api/v1/messages/:conversationId
// @desc                                get message
// @access                              private

exports.getMessages = catchAsync(async (req, res, next) => {
  const messages = await Message.find({
    conversationId: req.params.conversationId,
  });

  if (!messages) {
    return next(new AppError("message not found", 400, undefined));
  }

  res.status(200).json({
    messages,
  });
});
