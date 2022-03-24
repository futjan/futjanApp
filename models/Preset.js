const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presetSchema = Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "preset must belong to a user"],
  },
  keyword: String,
  country: String,
  city: String,
  county: String,
  category: String,
  subCategory: String,
  type: String,
  salaryType: String,
  businessType: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Preset = mongoose.model("presets", presetSchema);
