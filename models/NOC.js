const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const NOCSchema = Schmea({
  noc_id: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: [true, "Name is required"],
  },
  owner: {
    type: String,
    required: [true, "owner is required"],
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

  country: {
    type: String,
    required: [true, "Country is required"],
  },
  county: {
    type: String,
    required: [true, "State is required"],
  },
  website: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  emailAdPoster: {
    type: String,
    required: [true, "email is required"],
  },
  emailFutjan: {
    type: String,
    required: [true, "email is required"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "noc must belong to a user"],
  },

  deleted: {
    type: Boolean,
    default: false,
    required: true,
    select: false,
  },
});

module.exports = NOC = mongoose.model("Noc", NOCSchema);
