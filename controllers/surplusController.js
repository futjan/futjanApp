const SurplusBusiness = require("../models/SurplusBusiness");
const validateSurplus = require("../validation/surplus");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @route                   POST /api/v1/surplus
// @desc                    create surplux
// @access                  Private
exports.createSurplus = catchAsync(async (req, res, next) => {
  const { errors, isValid } = validateSurplus(JSON.parse(req.body.surplus));
  // check validation
  if (!isValid) {
    return next(new AppError("Fields required", 400, errors));
  }
  let images = [];
  if (req.files.length > 0) {
    req.files.forEach((file) => {
      images.push(file.key);
    });
  }

  req.body = JSON.parse(req.body.surplus);

  // create surplus
  const surplus = await SurplusBusiness.create({
    user: req.user._id.toString(),
    name: req.body.name,
    company: req.body.company,
    contact: req.body.contac,
    contact: req.body.contact,
    address: req.body.address,
    postCode: req.body.postCode,
    city: req.body.city,
    businessType: req.body.businessType,
    country: req.body.country,
    category: req.body.category,
    description: req.body.description,
    weeklySchedule: req.body.weeklySchedule,
    originalPrice: req.body.originalPrice,
    offeredPrice: req.body.offeredPrice,
    discount: req.body.discount,
    keyword: req.body.keyword,
    county: req.body.county,
    promoteType: req.body.promoteType,
    images,
  });
  // send response to client
  res.status(201).json({
    status: "success",
    surplus,
  });
});

// @route                   GET /api/v1/surplus
// @desc                    get all surplus
// @access                  Public
exports.getAllSurplus = catchAsync(async (req, res, next) => {
  req.query.active = true;
  const features = new APIFeature(SurplusBusiness.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  // filtering extra fields and empty fields
  const queryObj = { ...req.query };
  const excludeFields = ["page", "sort", "limit", "fields"];
  excludeFields.forEach((el) => delete queryObj[el]);
  const excludeEmptyField = Object.keys(queryObj);
  excludeEmptyField.forEach((el) => {
    if (!queryObj[el] || queryObj[el].length === 0 || queryObj[el] == 0) {
      delete queryObj[el];
    }
  });

  const surpluses = await features.query;
  const totalDoc = await SurplusBusiness.find({
    active: true,
  }).countDocuments(queryObj);

  // check surplus exist or not
  if (!surpluses) {
    return next(new AppError("Surplus does not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    totalDocs: totalDoc,
    result: surpluses.length,
    surpluses,
  });
});

// @route                   GET /api/v1/surplus/current-user-surplus
// @desc                    get all surplus create by current user
// @access                  Private
exports.getAllCurrentUserSurplus = catchAsync(async (req, res, next) => {
  req.query.user = req.user._id.toString();
  const features = new APIFeature(SurplusBusiness.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const surpluses = await features.query;
  const totalDoc = await SurplusBusiness.find({
    user: req.user._id.toString(),
  }).countDocuments();

  // check surplus exist or not
  if (!surpluses) {
    return next(new AppError("Surplus does not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    totalDocs: totalDoc,
    result: surpluses.length,
    surpluses,
  });
});

// @route                   GET /api/v1/surplus/:id
// @desc                    get surplus by id
// access                   Private
exports.getSurplus = catchAsync(async (req, res, next) => {
  const surplus = await SurplusBusiness.findById(req.params.id).populate(
    "reviews"
  );

  // check surplux exist or not
  if (!surplus) {
    return next(new AppError("Surplus not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    surplus,
  });
});

// @route                   DELETE /api/v1/surplus/:id
// @desc                    delete surplux
// @access                  Private
exports.deleteSurplus = catchAsync(async (req, res, next) => {
  const surplus = await SurplusBusiness.findByIdAndDelete(req.params.id).select(
    "-name -company -__v -description -originalPrice -offeredPrice -discount -active -businessType -address -category -city -country -contact -postCode -weeklySchedule -user -website -createdAt"
  );
  // check surplux exist or not
  if (!surplus) {
    return next(new AppError("Surplus not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    surplus,
  });
});

// @route                   PATCH /api/v1/surplus
// @desc                    update surplux
// @access                  Private
exports.updateSurplus = catchAsync(async (req, res, next) => {
  if (req.files.length > 0) {
    let images = [];
    req.files.forEach((file) => {
      images.push(file.key);
    });
    req.body.images = images;
  }

  // const surplus = await SurplusBusiness.findByIdAndUpdate(
  //   req.body.id,
  //   req.body.surplus,
  //   { new: true, runValidators: true }
  // );
  // // check surplus exist or not
  // if (!surplus) {
  //   return next(new AppError("Surplus not found", 404, undefined));
  // }
  // // send response to client
  // res.status(200).json({
  //   status: "success",
  //   surplus:"",
  // });
  res.end();
});

// @route                   GET /api/v1/surplus/activate
// @desc                    activate surplus
// @access                  Private
exports.surplusActivate = catchAsync(async (req, res, next) => {
  req.query.user = req.user._id.toString();
  const surplus = await SurplusBusiness.findByIdAndUpdate(
    req.body.id,
    { active: req.body.active },
    { new: true, runValidators: true }
  );
  // check surplus exist or not
  if (!surplus) {
    return next(new AppError("Surplus not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    surplus,
  });
});

// @route                   GET /api/v1/surplus/keyword
// @desc                    get surplus keyword
// @access                  Public
exports.surplusKeyword = catchAsync(async (req, res, next) => {
  const keywords = await SurplusBusiness.find({}).select("keyword");

  if (!keywords) {
    return next(new AppError("Not Found ", 404, undefined));
  }

  res.status(200).json({
    status: "success",
    keywords: keywords,
  });
});
