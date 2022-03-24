const Job = require("../models/Job");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const validateJob = require("../validation/job");
const APIFeature = require("../utils/apiFeatures");

// @route                   POST /api/v1/job
// @desc                    create job
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  let images = [];
  if (req.files.length > 0) {
    req.files.forEach((file) => {
      images.push(file.key);
    });
  }

  req.body = JSON.parse(req.body.job);

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
    promoteType: req.body.promoteType,
    images,
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
  const features = new APIFeature(Job.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const jobs = await features.query;

  const totalFilterDocs = new APIFeature(Job.find(), req.query)
    .filter()
    .totalFilterDocs();
  const totalDocs = await totalFilterDocs;
  // send response to client
  res.status(200).json({
    status: "success",
    jobs,
    totalDocs,
  });
});

// @route                   GET /api/v1/job/:id
// @desc                    GET job
// @access                  Public
exports.getJobById = catchAsync(async (req, res, next) => {
  const job = await Job.findById(req.params.id).populate("comments");
  // .select("+createdAt");

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

exports.validateJob = catchAsync(async (req, res, next) => {
  const { errors, isValid } = validateJob(JSON.parse(req.body.job));
  // check validation
  if (!isValid) {
    return next(new AppError("Fields required", 400, errors));
  }

  next();
});

// @route                   GET /api/v1/job/current-user-job
// @desc                    get all job create by current user
// @access                  Private
exports.getAllCurrentUserJobs = catchAsync(async (req, res, next) => {
  req.query.user = req.user._id.toString();
  const features = new APIFeature(Job.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const jobs = await features.query;
  const totalDoc = await Job.find({
    user: req.user._id.toString(),
  }).countDocuments();

  // check surplus exist or not
  if (!jobs) {
    return next(new AppError("Surplus does not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    totalDocs: totalDoc,
    result: jobs.length,
    jobs,
  });
});
