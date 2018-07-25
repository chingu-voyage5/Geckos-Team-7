const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNewPin(data) {
  let errors = {};

  data.sourceUrl = !isEmpty(data.sourceUrl) ? data.sourceUrl : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  console.log("url and image name", data.sourceUrl, data.image);

  if (!isEmpty(data.sourceUrl)) {
    if (!Validator.isURL(data.sourceUrl)) {
      errors.sourceUrl = "Not a valid URL";
    }
  }

  if (isEmpty(data.image)) {
    //if (!Validator.isURL(data.image)) {
      errors.sourcImg = "Please enter a name your image";
    //}
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
