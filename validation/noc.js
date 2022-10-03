const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateSurplus(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.owner = !isEmpty(data.owner) ? data.owner : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.postCode = !isEmpty(data.postCode) ? data.postCode : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.county = !isEmpty(data.county) ? data.county : "";
  data.emailFutjan = !isEmpty(data.emailFutjan) ? data.emailFutjan : "";
  data.emailAdPoster = !isEmpty(data.emailAdPoster) ? data.emailAdPoster : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "title is required";
  }
  if (Validator.isEmpty(data.owner)) {
    errors.owner = "owner is required";
  }
  if (Validator.isEmpty(data.county)) {
    errors.county = "State is required";
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
  if (Validator.isEmpty(data.country)) {
    errors.country = "Country is required";
  }
  if (Validator.isEmpty(data.emailFutjan)) {
    errors.emailFutjan = "email is required";
  } else {
    if (!Validator.isEmail(data.emailFutjan)) {
      errors.emailFutjan = "Email is invalid";
    }
  }
  if (Validator.isEmpty(data.emailAdPoster)) {
    errors.emailAdPoster = "email is required";
  } else {
    if (!Validator.isEmail(data.emailAdPoster)) {
      errors.emailAdPoster = "Email is invalid";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
