const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateBusiness(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.postCode = !isEmpty(data.postCode) ? data.postCode : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.businessType = !isEmpty(data.businessType) ? data.businessType : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.keyword = !isEmpty(data.keyword) ? data.keyword : "";
  data.county = !isEmpty(data.county) ? data.county : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "title is required";
  }
  if (Validator.isEmpty(data.county)) {
    errors.county = "State is required";
  }
  if (Validator.isEmpty(data.keyword)) {
    errors.keyword = "keyword is required";
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }
  if (Validator.isEmpty(data.postCode)) {
    errors.postCode = "Postcode is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "city is required";
  }
  if (Validator.isEmpty(data.businessType)) {
    errors.businessType = "business type is required";
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = "Country is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "description is required";
  }
  if (
    data.files.length === 0 ||
    data.files === undefined ||
    data.files === null
  ) {
    errors.files = "image is required";
  }

  if (
    data.offeredPrice === 0 &&
    data.offeredPrice === undefined &&
    data.offeredPrice === null
  ) {
    errors.offeredPrice = "Offer price is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
