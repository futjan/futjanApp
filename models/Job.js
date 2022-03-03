const mongoose = require("mongoose");
const Sehema = mongoose.Schema;

// job Schema

const jobSchema = Sehema({
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
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

module.exports = Job = mongoose.model("jobs", jobSchema);
