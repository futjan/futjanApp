const Conversation = require("../models/Conversation");
const User = require("../models/User");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                               POST /api/v1/converstions
// @desc                                start new conv
// @access                              Private

exports.create = catchAsync(async (req, res, next) => {
  const conversation = await Conversation.create({
    members: [req.user._id.toString(), req.body.receiver],
  });
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
exports.getConversations = catchAsync(async (req, res, next) => {
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

// @route                               GET /api/v1/converstions/single/:reveiverId
// @desc                                get  conv
// @access                              Private
exports.getConversation = catchAsync(async (req, res, next) => {
  const conversation = await Conversation.findOne({
    $and: [
      {
        members: {
          $in: [req.user._id.toString()],
        },
      },
      {
        members: {
          $in: [req.params.reveiverId],
        },
      },
    ],
  });

  if (!conversation) {
    return next(new AppError("conversation not found", 400, undefined));
  }

  res.status(200).json({
    conversation,
  });
});

// @route                               GET /api/v1/converstions/user/:id
// @desc                                get  conversation participent
// @access                              Private
exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).select(
    "-contact -email -blocked -account"
  );

  if (!user) {
    return next(new AppError("user not found", 404, undefined));
  }
  res.status(200).json(user);
});
