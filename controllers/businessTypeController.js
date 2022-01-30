const BusinessType = require("../models/BusinessType");
const AppError = require("../utils/appError");

// @route                   POST /api/v1/businesstype
// @desc                    create new business type
// @access                  Private
exports.create = async (req, res, next) => {
  //check validataion
  if (!req.body.type) {
    return next(new AppError("Business type is required", 400, undefined));
  }

  const businessType = await BusinessType.create(req.body);

  //check type exist or not
  if (!businessType) {
    return next(new AppError("Business type not exist", 400, undefined));
  }
  // send response to client
  res.status(201).json({
    status: "success",
    businessType,
  });
};

// @route                   GET /api/v1/businesstype
// @desc                    get all business type
// @access                  Private
exports.getAllType = async (req, res, next) => {
  const businessTypes = await BusinessType.find({});

  //check type exist or not
  if (!businessTypes) {
    return next(new AppError("Business types not found", 400, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    businessTypes,
  });
};

// @route                   DELETE /api/v1/businesstype/:id
// @desc                    delete business type
// @access                  Private
exports.deleteType = async (req, res, next) => {
  const businessType = await BusinessType.findByIdAndDelete(req.params.id);

  //check type exist or not
  if (!businessType) {
    return next(new AppError("Business type not exist", 400, undefined));
  }
  // send response to client
  res.status(200).json({
    status: "success",
    businessType,
  });
};
