const Conversation = require("../models/Conversation");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                               POST /api/v1/converstions
// @desc                                start new conv
// @access                              Private

exports.create = catchAsync(async (req, res, next) => {
  const conversation = await Conversation.create({
    members: [req.user._id, req.body.receiver],
  });
  console.log(conversation.created_at);
  // check
  if (!conversation) {
    return next(new AppError("converstion not start...", 400, undefined));
  }

  res.status(201).json({
    conversation,
  });
});

// @route                               GET /api/v1/converstions
// @desc                                get  conv
// @access                              Private

exports.getConversation = catchAsync(async (req, res, next) => {
  const conversations = await Conversation.find({
    members: {
      $in: [req.user._id.toString()],
    },
  });

  if (!conversations) {
    return next(new AppError("conversation not found", 400, undefined));
  }

  res.status(200).json({
    conversations,
  });
});
