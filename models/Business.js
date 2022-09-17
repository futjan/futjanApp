const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const businessSchema = new Schmea(
  {
    adType: {
      type: String,
      required: [true, "Ad type is required"],
      default: "business",
    },
    ad_id: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: [true, "keyword is required"],
    },
    title: {
      type: String,
      required: [true, "Name is required"],
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
    county: {
      type: String,
      required: [true, "State is required"],
    },

    offeredPrice: {
      type: Number,
      required: [true, "Original price is required"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    images: [String],
    currency: {
      type: String,
      required: [true, "Currency"],
      enum: ["£", "₹"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    promoteType: {
      type: [
        {
          promote: String,
          numberSort: Number,
        },
      ],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: [true, "review must belong to a user"],
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },

    deleted: {
      type: Boolean,
      default: false,
      required: true,
      select: false,
    },
    views: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

module.exports = Business = mongoose.model("Business", businessSchema);
