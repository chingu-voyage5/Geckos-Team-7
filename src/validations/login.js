import Validator from 'validator';
//const isEmpty = require("./is-empty");
import isEmpty from './is-empty';

module.exports = function validateLoginInput(data) {
  let errors = {};
  //Sets data to a string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  console.log("email and password is", data.email, data.password);

  if (!Validator.isEmail(data.email)) {
    console.log(data.email, " is invalid");
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is requied";
  }
  
  console.log(errors, isEmpty(errors));
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
