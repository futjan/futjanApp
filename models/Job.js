const mongoose = require("mongoose");
const Sehema = mongoose.Schema;

// job Schema

const jobSchema = new Sehema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    subCategory: {
      type: String,
      required: [true, "Sub category is required"],
    },
    type: {
      type: String,
      required: [true, "Job type is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    salaryType: {
      type: String,
      required: [true, "Salary type is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    county: {
      type: String,
      required: [true, "State is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    promoteType: {
      type: [
        {
          promote: String,
          numberSort: Number,
        },
      ],
    },

    adType: {
      type: String,
      required: [true, "ad type is required"],
      default: "job",
      select: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: [true, "Job must belong to a user"],
    },
    minSalary: Number,
    maxSalary: Number,
    experience: String,
    qualification: String,
    languages: [String],
    email: String,
    contact: String,
    address: String,
    skills: [String],
    currency: {
      type: String,
      required: [true, "Currency"],
      enum: ["£", "₹"],
    },
    images: [String],
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
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

// jobSchema.virtual("comments", {
//   ref: "comments",
//   foreignField: "job",
//   localField: "_id",
// });
jobSchema.virtual("comments", {
  ref: "comments",
  foreignField: "job",
  localField: "_id",
});

module.exports = Job = mongoose.model("jobs", jobSchema);
