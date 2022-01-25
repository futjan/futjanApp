const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateSurplus(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.postCode = !isEmpty(data.postCode) ? data.postCode : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.businessType = !isEmpty(data.businessType) ? data.businessType : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.weeklySchedule = !isEmpty(data.weeklySchedule)
    ? data.weeklySchedule
    : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company is required";
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
  if (Validator.isEmpty(data.category)) {
    errors.category = "category is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "description is required";
  }
  if (data.weeklySchedule.length === 0) {
    errors.weeklySchedule = "Weekly schedule is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
