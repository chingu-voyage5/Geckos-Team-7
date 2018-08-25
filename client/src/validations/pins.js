const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNewPin(data) {
  let errors = {};

  data.sourceUrl = !isEmpty(data.sourceUrl) ? data.sourceUrl : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  console.log("url and image name", data.sourceUrl, data.image);

  if (!isEmpty(data.sourceUrl)) {
    if (!Validator.isURL(data.sourceUrl)) {
      errors.url = "Not a valid URL";
    }
  }
  else {
    errors.url = "Enter a URL";
  }

  if (isEmpty(data.image)) {
    //if (!Validator.isURL(data.image)) {
      errors.title = "Enter an image name";
    //}
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
