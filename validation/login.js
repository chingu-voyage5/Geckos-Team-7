const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  //Sets data to a string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  console.log(data.email, data.password);

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is requied";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
