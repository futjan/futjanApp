const Job = require("../models/Job");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                   POST /api/v1/job
// @desc                    create job
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  const job = await Job.create({
    user: req.user._id.toString(),
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    type: req.body.type,
    gender: req.body.gender,
    salaryType: req.body.salaryType,
    maxSalary: req.body.maxSalary,
    minSalary: req.body.minSalary,
    experience: req.body.experience,
    qualification: req.body.qualification,
    languages: req.body.languages,
    email: req.body.email,
    contact: req.body.contact,
    address: req.body.address,
    subCategory: req.body.subCategory,
  });

  // check job
  if (!job) {
    return next(new AppError("Failed to create Job", 400, undefined));
  }

  res.status(201).json({
    status: "success",
    job,
  });
});

// @route                   GET /api/v1/job
// @desc                    GET jobs
// @access                  Public
exports.getJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find({});

  // send response to client
  res.status(200).json({
    status: "success",
    jobs,
  });
});

// @route                   GET /api/v1/job/:id
// @desc                    GET job
// @access                  Public
exports.getJobById = catchAsync(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError("Job not found with that id", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    job,
  });
});

// @route                   PATCH /api/v1/job/:id
// @desc                    update job
// @access                  Private
exports.updateJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!job) {
    return next(new AppError("Failed to update Job", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    job,
  });
});

// @route                   DELETE /api/v1/job/:id
// @desc                    delete job
// @access                  Private
exports.deleteJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    return next(new AppError("Failed to delete job", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    job,
  });
});
