const Contact = require("../models/Contact");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const validateContactForm = require("../validation/contact");

// @route                   POST  /api/v1/contact
// @desc                    create new contact
// @access                  Pubic
exports.create = catchAsync(async (req, res, next) => {
  const contact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });

  if (!contact) {
    return next(new AppError("Error ", 400, undefined));
  }

  res.status(201).json({
    message: " information received",
  });
});

// @route                   GET  /api/v1/contact
// @desc                    get contacts
// @access                  Private
exports.getContacts = catchAsync(async (req, res, next) => {
  const contacts = await Contact.find({});

  if (!contacts) {
    return next(new AppError("contacts not found", 400, undefined));
  }

  res.status(200).json({
    status: "success",
    contacts,
  });
});

// @route                   DELETE  /api/v1/contact/:id
// @desc                    delete contact
// @access                  Private
exports.deleteContact = catchAsync(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return next(new AppError("Error", 400, undefined));
  }

  res.status(204).json({
    message: "Record successfully deleted!",
  });
});

// validate contact form
exports.validate = catchAsync(async (req, res, next) => {
  const { errors, isValid } = validateContactForm(req.body);

  if (!isValid) {
    return next(new AppError("Fields require", 400, errors));
  }
  next();
});
