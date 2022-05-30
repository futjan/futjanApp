const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// job Seeker Schema

const jobSeekerSchema = Schema({
  adType: {
    type: String,
    required: [true, "Ad type is required"],
    default: "jobseeker",
  },
  title: {
    type: String,
    required: [true, "Job Title is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  dob: {
    type: String,
    required: [true, "DOB is required"],
  },
  skills: {
    type: [String],
    required: [true, "Skill is required"],
  },
  salaryType: {
    type: String,
    required: [true, "payment type is required"],
  },
  rate: {
    type: Number,
    required: [true, "rate is required"],
  },
  country: {
    type: String,
    required: [true, "country is required"],
  },
  county: {
    type: String,
    required: [true, "county is required"],
  },
  city: {
    type: String,
    required: [true, "city is required"],
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },
  age: {
    type: String,
    required: [true, "age is required"],
  },
  contact: {
    type: String,
    required: [true, "contact is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  qualification: {
    type: String,
    required: [true, "qualification is required"],
  },
  experience: {
    type: String,
    required: [true, "experience is required"],
  },
  languages: [String],
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  subCategory: {
    type: String,
    required: [true, "subcategory is required"],
  },
  cv: String,
  description: {
    type: String,
    required: [true, "description is required"],
  },
  images: String,
  location: String,

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "Job seeker must belong to a user"],
  },
  promoteType: {
    type: [
      {
        promote: String,
        numberSort: Number,
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
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
});

module.exports = JobSeeker = mongoose.model("jobseekers", jobSeekerSchema);
