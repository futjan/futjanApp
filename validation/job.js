const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateSurplus(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.subCategory = !isEmpty(data.subCategory) ? data.subCategory : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.salaryType = !isEmpty(data.salaryType) ? data.salaryType : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.county = !isEmpty(data.county) ? data.county : "";
  data.city = !isEmpty(data.city) ? data.city : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }
  if (Validator.isEmpty(data.subCategory)) {
    errors.subCategory = "Subcategory is required";
  }
  //   if (Validator.isEmpty(data.keyword)) {
  //     errors.keyword = "keyword is required";
  //   }

  if (Validator.isEmpty(data.type)) {
    errors.type = "Type is required";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender is required";
  }
  if (Validator.isEmpty(data.salaryType)) {
    errors.salaryType = "Salary type is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "description is required";
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = "country is required";
  }
  if (Validator.isEmpty(data.county)) {
    errors.county = "county is required";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "city is required";
  }
  //   if (
  //     data.files.length === 0 ||
  //     data.files === undefined ||
  //     data.files === null
  //   ) {
  //     errors.files = "image is required";
  //   }

  //   if (
  //     data.originalPrice === 0 &&
  //     data.originalPrice === undefined &&
  //     data.originalPrice === null
  //   ) {
  //     errors.originalPrice = "Original price is required";
  //   }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
