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
    receiver: req.body.receiver,
  });

  if (!message) {
    return next(new AppError("message not send", 400, undefined));
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

// @route                             PATCH /api/v1/messages/:conversationId
// @desc                              Set message status to read
// @access                            Private
exports.markMessageRead = catchAsync(async (req, res, next) => {
  const messages = await Message.updateMany(
    {
      conversationId: req.params.conversationId,
      status: "unseen",
      receiver: req.user._id,
    },
    { status: "seen" },
    { multi: true, new: true }
  );
  if (!messages) {
    return next(new AppError("Message not found", 400, undefined));
  }
  res.status(200).json({
    messages,
  });
});
// @route                               GET /api/v1/messages
// @desc                                get unseen message count
// @access                              Private
exports.getUnseenMessageCount = catchAsync(async (req, res, next) => {
  const count = await Message.find({
    status: "unseen",
    receiver: req.user._id,
  }).countDocuments();

  if (!count && typeof count !== "number") {
    return next(new AppError("messages not found", 400, undefined));
  }

  res.status(200).json({
    count,
  });
});
