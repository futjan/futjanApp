const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presetSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "preset must belong to a user"],
  },
  country: String,
  city: String,
  county: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Preset = mongoose.model("presets", presetSchema);
