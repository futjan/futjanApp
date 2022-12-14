const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    conversationId: {
      type: mongoose.Schema.ObjectId,
    },
    sender: {
      type: mongoose.Schema.ObjectId,
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
    },
    text: String,
    status: {
      type: String,
      required: true,
      default: "unseen",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = Message = mongoose.model("message", messageSchema);
