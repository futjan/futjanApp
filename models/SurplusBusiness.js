const mongoose = require("mongoose");
const Schmea = mongoose.Schema;

const surplusBusiness = new Schmea(
  {
    adType: {
      type: String,
      required: [true, "Ad type is required"],
      default: "surplus",
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
    county: {
      type: String,
      required: [true, "State is required"],
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

// virtual populate or connect to datasets
// Virtual populate
surplusBusiness.virtual("reviews", {
  ref: "Review",
  foreignField: "surplus",
  localField: "_id",
});
module.exports = SurplusBusiness = mongoose.model("surplus", surplusBusiness);
