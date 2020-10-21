const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateForgotInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  // Name checks
  if (Validator.isEmpty(data.username)) {
    errors.name = "UserName field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
