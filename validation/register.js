const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  
  //Sets data to a string

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  console.log("data passed to validation register is", data);
  console.log("Validator.isLength, Validator.isEmpty",data.password, Validator.isLength(data.password, { min: 6, max:30}), Validator.isEmpty(data.password2), Validator.equals(data.password, data.password2));

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.name = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max:30})) {
    console.log("password length is too short or too long");
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    console.log("password 2 is empty");
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    console.log("passwords don't match");
    errors.match = "Passwords must match";
  }
  
  console.log("errors is", errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
};


