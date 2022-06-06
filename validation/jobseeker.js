const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateJobSeeker(data) {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.subCategory = !isEmpty(data.subCategory) ? data.subCategory : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.salaryType = !isEmpty(data.salaryType) ? data.salaryType : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.experience = !isEmpty(data.experience) ? data.experience : "";
  data.qualification = !isEmpty(data.qualification) ? data.qualification : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.county = !isEmpty(data.county) ? data.county : "";
  data.city = !isEmpty(data.city) ? data.city : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "job title is required";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "name is required";
  }
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }
  if (Validator.isEmpty(data.subCategory)) {
    errors.subCategory = "Subcategory is required";
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
  if (Validator.isEmpty(data.age)) {
    errors.age = "age is required";
  }
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "dob is required";
  }
  if (Validator.isEmpty(data.qualification)) {
    errors.qualification = "qualification is required";
  }
  if (Validator.isEmpty(data.experience)) {
    errors.experience = "experience is required";
  }
  if (Validator.isEmpty(data.contact)) {
    errors.contact = "contact is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "email must be valid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email is required";
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = "country is required";
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
  if (
    data.skills.length === 0 ||
    data.skills === undefined ||
    data.skills === null
  ) {
    errors.skills = "skills is required";
  }

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
