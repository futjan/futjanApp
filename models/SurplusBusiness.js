const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const surplusBusiness = Schmea({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
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
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  weeklySchedule: {
    type: [String],
    required: [true, "Weekly schedule is required"],
  },
  website: String,

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = SurplusBusiness = mongoose.model("surplus", surplusBusiness);
