const JobSeeker = require("../models/JobSeeker");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const validateJobSeeker = require("../validation/jobseeker");
const APIFeature = require("../utils/apiFeatures");

// @route                   POST /api/v1/jobseekers
// @desc                    create jobseekers
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  req.body = await JSON.parse(req.body.job);

  for (let i = 0; i < req.files.length; i++) {
    if (req.files[i].fileType === "cv") {
      req.body.cv = req.files[i].key;
    } else if (req.files[i].fileType === "photo") {
      req.body.images = req.files[i].key;
    }
  }

  const jobSeeker = await JobSeeker.create({
    user: req.user._id.toString(),
    title: req.body.title,
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
    county: req.body.county,
    city: req.body.city,
    salaryType: req.body.salaryType,
    promoteType: req.body.promoteType,
    images: req.body.images,
    currency: req.body.currency,
    address: req.body.address,
    ad_id: req.body.ad_id,
    cv: req.body.cv,
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
  req.query.active = true;
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
// @route                   GET /api/v1/jobseekers/admin-only
// @desc                    GET job seekers
// @access                  Public
exports.getAdminJobSeekers = catchAsync(async (req, res, next) => {
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
    result: jobSeekers.length,
  });
});
// @route                   GET /api/v1/jobseekers/current-user
// @desc                    GET job seeker
// @access                  Private

exports.getPrivateJobSeeker = catchAsync(async (req, res, next) => {
  req.query.user = req.user._id.toString();
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
    result: jobSeekers.length,
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

// @route                   GET /api/v1/jobseekers/activate
// @desc                    activate job seeker
// @access                  Private
exports.jobSeekerActivate = catchAsync(async (req, res, next) => {
  // req.query.user = req.user._id.toString();
  const jobSeeker = await JobSeeker.findByIdAndUpdate(
    req.body.id,
    { active: req.body.active },
    { new: true, runValidators: true }
  );
  // check jobSeeker exist or not
  if (!jobSeeker) {
    return next(new AppError("jobSeeker not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    jobSeeker,
  });
});
// @route                   PATCH /api/v1/jobseekers/:id
// @desc                    update job seeker
// @access                  Private
exports.updateJobSeeker = catchAsync(async (req, res, next) => {
  const jobSeeker = await JSON.parse(req.body.job);

  for (let i = 0; i < req.files.length; i++) {
    if (req.files[i].fileType === "cv") {
      jobSeeker.cv = req.files[i].key;
    } else if (req.files[i].fileType === "photo") {
      jobSeeker.images = req.files[i].key;
    }
  }

  const jobSeeker1 = await JobSeeker.findByIdAndUpdate(
    req.params.id,
    {
      title: jobSeeker.title,
      description: jobSeeker.description,
      category: jobSeeker.category,
      subCategory: jobSeeker.subCategory,
      name: jobSeeker.name,
      gender: jobSeeker.gender,
      dob: jobSeeker.dob,
      age: jobSeeker.age,
      experience: jobSeeker.experience,
      qualification: jobSeeker.qualification,
      languages: jobSeeker.languages,
      email: jobSeeker.email,
      contact: jobSeeker.contact,
      skills: jobSeeker.skills,
      rate: jobSeeker.rate,
      country: jobSeeker.country,
      county: jobSeeker.county,
      city: jobSeeker.city,
      salaryType: jobSeeker.salaryType,
      promoteType: jobSeeker.promoteType,
      images: jobSeeker.images,
      currency: jobSeeker.currency,
      address: jobSeeker.address,
      cv: jobSeeker.cv,
    },
    {
      new: true,
    }
  );

  if (!jobSeeker1) {
    return next(new AppError("Failed to update Job seeker", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    jobSeeker: jobSeeker1,
  });
});

// @route             PATCH /api/v1/jobseekers/delete-file
// @desc              delete file
// @access            Private
exports.updateJobSeekerFile = catchAsync(async (req, res, next) => {
  const jobSeeker = await JobSeeker.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
  });
  // check surplus exist or not
  if (!jobSeeker) {
    return next(new AppError("jobSeeker not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    jobSeeker,
  });
});
// @route             PATCH /api/v1/jobseekers/views
// @desc              update views
// @access            Public
exports.updateViews = catchAsync(async (req, res, next) => {
  const surplus = await JobSeeker.findByIdAndUpdate(
    req.body.id,
    { views: req.body.views },
    { new: true }
  );
  if (!surplus) {
    return next(new AppError("views not update", 400, undefined));
  }

  res.status(200).json({
    status: "success",
  });
});

// @route                   DELETE /api/v1/job/:id
// @desc                    delete job
// @access                  Private
exports.deleteJobSeeker = catchAsync(async (req, res, next) => {
  const jobSeeker = await JobSeeker.findByIdAndUpdate(
    req.params.id,
    { deleted: true },
    { new: true, runValidators: true }
  );

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
