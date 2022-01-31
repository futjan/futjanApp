const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const surplusBusiness = Schmea({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  company: {
    type: String,
  },
  contact: {
    type: String,
    required: [true, "Contact is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  postCode: {
    type: String,
    required: [true, "Postcode is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  businessType: {
    type: String,
    required: [true, "Business type is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  originalPrice: {
    type: Number,
    required: [true, "Original price is required"],
  },

  offeredPrice: Number,
  discount: Number,
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  weeklySchedule: {
    type: [String],
  },
  website: String,

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

module.exports = SurplusBusiness = mongoose.model("surplus", surplusBusiness);
