const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessType = Schema({
  type: {
    type: String,
    required: [true, "Business type is required"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = BusinessType = mongoose.model("businessType", businessType);
