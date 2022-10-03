const Report = require("../models/Report");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const NOC = require("../models/NOC");
const catchAsync = require("../utils/catchAsync");
const validateNocInput = require("../validation/noc");
// @route                   POST /api/v1/report
// @desc                    create report
// @access                  Private
exports.createReport = catchAsync(async (req, res, next) => {
  const report = await Report.create({
    reason: req.body.reason,
    description: req.body.description,
    user: req.user.id,
    ad: req.body.adId,
    onModel: req.body.model,
  });

  if (!report) {
    return next(new AppError("report not created", 400, undefined));
  }

  res.status(201).json({
    status: "success",
    report,
  });
});

// @route                       GET /api/v1/report
// @desc                        get reports
// @access                      admin-only
exports.getReports = catchAsync(async (req, res, next) => {
  const features = new APIFeature(Report.find(), req.query).pagination();

  const reports = await features.query;

  const totalFilterDocs = new APIFeature(
    Report.find(),
    req.query
  ).totalFilterDocs();

  const totalDocs = await totalFilterDocs;
  if (!reports) {
    return next(new AppError("reports not found", 404, undefined));
  }

  res.status(200).json({
    status: "success",
    reports,
    totalDocs,
    result: reports.length,
  });
});

// @route                           GET /api/v1/report/:id
// @desc                            get report by id
// @access                          Private
exports.getReportById = catchAsync(async (req, res, next) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    return next(new AppError("report not found"));
  }

  res.status(200).json({
    status: "success",
    report,
  });
});

// @route                   POST /api/v1/report/noc
// @desc                    create noc
// @access                  Private
exports.NocCreate = catchAsync(async (req, res, next) => {
  // const noc = "nonon";
  const noc = await NOC.create({
    user: req.user._id.toString(),
    title: req.body.title,
    owner: req.body.owner,
    contact: req.body.contact,
    address: req.body.address,
    postCode: req.body.postCode,
    country: req.body.country,
    county: req.body.county,
    city: req.body.city,
    emailAdPoster: req.body.emailAdPoster,
    emailFutjan: req.body.emailFutjan,
    noc_id: req.body.noc_id,
    item_id: req.body.item_id,
    reason: req.body.reason,
  });
  if (!noc) {
    return next(new AppError("noc not created", 400, undefined));
  }
  console.log("NOC CREATE");

  res.status(201).json({
    status: "success",
    noc,
  });
});

// noc validator
exports.validateNoc = catchAsync(async (req, res, next) => {
  const { errors, isValid } = validateNocInput(req.body);
  console.log(errors);
  console.log(isValid);
  if (!isValid) {
    return next(new AppError("Fields require", 400, errors));
  }
  next();
});
