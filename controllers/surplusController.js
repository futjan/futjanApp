const SurplusBusiness = require("../models/SurplusBusiness");
const validateSurplus = require("../validation/surplus");
const APIFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");

// @route                   POST /api/v1/surplus
// @desc                    create surplux
// @access                  Private
exports.createSurplus = async (req, res, next) => {
  const { errors, isValid } = validateSurplus(req.body);
  // check validation
  if (!isValid) {
    return next(new AppError("Fields required", 400, errors));
  }
  // create surplus
  const surplus = await SurplusBusiness.create(req.body);

  // send response to client
  res.status(201).json({
    status: "success",
    surplus,
  });
};

// @route                   GET /api/v1/surplus
// @desc                    get all surplus
// @access                  Private
exports.getAllSurplus = async (req, res, next) => {
  const features = new APIFeature(SurplusBusiness.find(), req.query)
    .filter()
    .sort()
    .limitField()
    .pagination();
  const surpluses = await features.query;
  const totalDoc = await SurplusBusiness.countDocuments();

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
};

// @route                   GET /api/v1/surplus/:id
// @desc                    get surplus by id
// access                   Private
exports.getSurplus = async (req, res, next) => {
  const surplus = await SurplusBusiness.findById(req.params.id);

  // check surplux exist or not
  if (!surplus) {
    return next(new AppError("Surplus not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    surplus,
  });
};

// @route                   DELETE /api/v1/surplus/:id
// @desc                    delete surplux
// @access                  Private

exports.deleteSurplus = async (req, res, next) => {
  const surplus = await SurplusBusiness.findByIdAndDelete(req.params.id);
  // check surplux exist or not
  if (!surplus) {
    return next(new AppError("Surplus not found", 404, undefined));
  }

  // send response to client
  res.status(200).json({
    status: "success",
    surplus,
  });
};

// @route                   PATCH /api/v1/surplus
// @desc                    update surplux
// @access                  Private
exports.updateSurplus = async (req, res, next) => {
  const surplus = await SurplusBusiness.findByIdAndUpdate(
    req.body.id,
    req.body.surplus,
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
};
