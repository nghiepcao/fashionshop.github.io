const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateVerifyInput(data) {
  let errors = {};
  data.code = !isEmpty(data.code) ? data.code : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  // Name checks
  if (Validator.isEmpty(data.code)) {
    errors.code = "Code verify field is required";
  } else if (!Validator.isCode(data.code)) {
    errors.code = "Email is invalid";
  }
  return { errors: errors, isValid: isEmpty(errors) };
};
