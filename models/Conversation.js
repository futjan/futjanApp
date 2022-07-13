const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    members: {
      type: Array,
    },
    ad: {
      ad: {
        type: mongoose.Schema.ObjectId,
        required: true,
        refPath: "onModel",
      },
      onModel: {
        type: String,
        required: true,
        enum: ["surplus", "jobs", "jobseekers"],
        select: false,
      },
      adType: {
        type: String,
        required: true,
      },
      image: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = Conversation = mongoose.model(
  "conversation",
  conversationSchema
);
