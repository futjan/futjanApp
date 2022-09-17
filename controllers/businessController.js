const Business = require("../models/Business");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const validate = require("../validation/business");

// @route                   POST /api/v1/business
// @desc                    create business
// @access                  Private
exports.create = catchAsync(async (req, res, next) => {
  let images = [];
  if (req.files.length > 0) {
    req.files.forEach((file) => {
      images.push(file.key);
    });
  }

  req.body = JSON.parse(req.body.business);

  // create surplus
  const business = await Business.create({
    user: req.user._id.toString(),
    title: req.body.title,
    contact: req.body.contact,
    address: req.body.address,
    postCode: req.body.postCode,
    city: req.body.city,
    county: req.body.county,
    country: req.body.country,
    businessType: req.body.businessType,
    description: req.body.description,
    offeredPrice: req.body.offeredPrice,
    keyword: req.body.keyword,
    promoteType: req.body.promoteType,
    images,
    currency: req.body.currency,
    ad_id: req.body.ad_id,
  });
  // send response to client
  res.status(201).json({
    status: "success",
    business,
  });
});

// @route                   GET /api/v1/business
// @desc                    get all business
// @access                  Public
exports.getAllBusiness = catchAsync(async (req, res, next) => {
  req.query.active = true;
  const features = new APIFeature(Business.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const businesses = await features.query;
  const totalFilterDocs = new APIFeature(Business.find(), req.query)
    .filter()
    .totalFilterDocs();
  const totalDoc = await totalFilterDocs;

  // check surplus exist or not
  if (!businesses) {
    return next(new AppError("Business does not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    totalDocs: totalDoc,
    result: businesses.length,
    businesses,
  });
});

// @route                   GET /api/v1/business/current-user-business
// @desc                    get all business create by current user
// @access                  Private
exports.getAllCurrentUserBusiness = catchAsync(async (req, res, next) => {
  req.query.user = req.user._id.toString();
  const features = new APIFeature(Business.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const businesses = await features.query;
  const totalDoc = await Business.find({
    user: req.user._id.toString(),
  }).countDocuments();

  // check surplus exist or not
  if (!surpluses) {
    return next(new AppError("business does not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    totalDocs: totalDoc,
    result: businesses.length,
    businesses,
  });
});

// @route                   GET /api/v1/business/admin-only
// @desc                    get all surplus
// access                   only admin
exports.getAdminBusiness = catchAsync(async (req, res, next) => {
  const features = new APIFeature(Business.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();

  const businesses = await features.query;
  const totalFilterDocs = new APIFeature(Business.find(), req.query)
    .filter()
    .totalFilterDocs();
  const totalDoc = await totalFilterDocs;

  // check surplus exist or not
  if (!surpluses) {
    return next(new AppError("business does not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    totalDocs: totalDoc,
    result: businesses.length,
    businesses,
  });
});

// @route                   GET /api/v1/business/:id
// @desc                    get business by id
// access                   Private
exports.getBusiness = catchAsync(async (req, res, next) => {
  const business = await Business.findOne({
    _id: req.params.id,
    $or: [{ deleted: false }, { deleted: undefined }],
  });

  // check surplux exist or not
  if (!business) {
    return next(new AppError("Business not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    business,
  });
});

// @route                   DELETE /api/v1/business/:id
// @desc                    delete business
// @access                  Private
exports.deleteBusiness = catchAsync(async (req, res, next) => {
  const business = await Business.findByIdAndUpdate(
    req.params.id,
    { deleted: true },
    { new: true, runValidators: true }
  ).select(
    "-name  -__v -description  -offeredPrice -discount -active -businessType -address  -city -country -contact -postCode  -user -createdAt"
  );
  // check surplux exist or not
  if (!business) {
    return next(new AppError(" not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    business,
  });
});

// @route                   PATCH /api/v1/business
// @desc                    update business
// @access                  Private
exports.updateBusiness = catchAsync(async (req, res, next) => {
  req.body = JSON.parse(req.body.business);

  if (req.files.length > 0) {
    let images = [];
    req.files.forEach((file) => {
      images.push(file.key);
    });

    req.body.images = [...req.body.images, ...images];
  }
  const business = await Business.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  // check surplus exist or not
  if (!business) {
    return next(new AppError("business not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    business,
  });
  // res.end();
});

// @route             PATCH /api/v1/business/views
// @desc              update views
// @access            Public
exports.updateViews = catchAsync(async (req, res, next) => {
  const business = await Business.findByIdAndUpdate(
    req.body.id,
    { views: req.body.views },
    { new: true }
  );
  if (!business) {
    return next(new AppError("views not update", 400, undefined));
  }

  res.status(200).json({
    status: "success",
  });
});

exports.updateBusinessImage = catchAsync(async (req, res, next) => {
  const business = await Business.findByIdAndUpdate(
    req.body.id,
    { images: req.body.images },
    { new: true }
  );

  // check surplus exist or not
  if (!business) {
    return next(new AppError("business not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    business,
  });
});
// @route                   GET /api/v1/business/activate
// @desc                    activate business
// @access                  Private
exports.businessActivate = catchAsync(async (req, res, next) => {
  // req.query.user = req.user._id.toString();
  const business = await Business.findByIdAndUpdate(
    req.body.id,
    { active: req.body.active },
    { new: true, runValidators: true }
  );
  // check surplus exist or not
  if (!business) {
    return next(new AppError("business not found", 404, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    business,
  });
});

// Validate Business

exports.validate = catchAsync(async (req, res, next) => {
  console.log("VALIDATE INPUT");
  console.log(req.body);
  const { errors, isValid } = validate(JSON.parse(req.body.business));
  // check validation
  if (!isValid) {
    return next(new AppError("Fields required", 400, errors));
  }
  next();
});
