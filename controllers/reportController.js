const Report = require("../models/Report");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                   POST /api/v1/report
// @desc                    create report
// @access                  Private
exports.createReport = catchAsync(async (req, res, next) => {
  const report = await Report.create({
    reason: req.body.reason,
    description: req.body.description,
    user: req.body.user,
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
