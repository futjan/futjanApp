const JobSeeker = require("../models/JobSeeker");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const validateJobSeeker = require("../validation/jobseeker");
const APIFeature = require("../utils/apiFeatures");

// @route                   POST /api/v1/jobseekers
// @desc                    create jobseekers
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  let photo = "";
  let cv = "";
  if (req.files.length > 0) {
    for (let i = 0; i < req.files.length; i++) {
      if (i == 0) {
        cv = req.files[i].key;
      } else {
        photo = req.files[i].key;
      }
    }
  }

  req.body = JSON.parse(req.body.job);

  const jobSeeker = await JobSeeker.create({
    user: req.user._id.toString(),
    jobTitle: req.body.jobTitle,
    description: req.body.description,
    category: req.body.category,
    subCategory: req.body.subCategory,
    name: req.body.name,
    gender: req.body.gender,
    dob: req.body.dob,
    age: req.body.age,
    experience: req.body.experience,
    qualification: req.body.qualification,
    languages: req.body.languages,
    email: req.body.email,
    contact: req.body.contact,
    skills: req.body.skills,
    rate: req.body.rate,
    country: req.body.country,
    salaryType: req.body.salaryType,
    promoteType: req.body.promoteType,
    photo,
    cv,
  });

  // check job
  if (!jobSeeker) {
    return next(new AppError("Failed to create job Seeker", 400, undefined));
  }

  res.status(201).json({
    status: "success",
    jobSeeker,
  });
});
// @route                   GET /api/v1/jobseekers
// @desc                    GET job seekers
// @access                  Public
exports.getJobSeekers = catchAsync(async (req, res, next) => {
  const features = new APIFeature(JobSeeker.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const jobSeekers = await features.query;

  const totalFilterDocs = new APIFeature(JobSeeker.find(), req.query)
    .filter()
    .totalFilterDocs();
  const totalDocs = await totalFilterDocs;
  // send response to client
  res.status(200).json({
    status: "success",
    jobSeekers,
    totalDocs,
  });
});

// @route                   GET /api/v1/jobseekers/:id
// @desc                    GET job seeker
// @access                  Public
exports.getJobSeekerById = catchAsync(async (req, res, next) => {
  const jobSeeker = await JobSeeker.findById(req.params.id);

  if (!jobSeeker) {
    return next(
      new AppError("job Seeker not found with that id", 400, undefined)
    );
  }

  res.status(200).json({
    status: "success",
    jobSeeker,
  });
});

// @route                   PATCH /api/v1/jobseekers/:id
// @desc                    update job seeker
// @access                  Private
exports.updateJobSeeker = catchAsync(async (req, res, next) => {
  const jobSeeker = await JobSeeker.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!jobSeeker) {
    return next(new AppError("Failed to update Job seeker", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    jobSeeker,
  });
});

// @route                   DELETE /api/v1/job/:id
// @desc                    delete job
// @access                  Private
exports.deleteJobSeeker = catchAsync(async (req, res, next) => {
  const jobSeeker = await JobSeeker.findByIdAndDelete(req.params.id);

  if (!jobSeeker) {
    return next(new AppError("Failed to delete job Seeker", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    jobSeeker,
  });
});

exports.validateJobSeeker = catchAsync(async (req, res, next) => {
  const { errors, isValid } = validateJobSeeker(JSON.parse(req.body.job));
  // check validation
  if (!isValid) {
    return next(new AppError("Fields required", 400, errors));
  }

  next();
});
