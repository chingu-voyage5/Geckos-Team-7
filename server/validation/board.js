const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateBoardInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (!Validator.isLength(data.title, { min: 2, max: 40 })) {
    errors.title = "Title must be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.description, { min: 10, max: 300 })) {
    errors.description = "Description must be between 10 and 300 characteres";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
