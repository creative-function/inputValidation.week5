"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputValidator = function InputValidator(selector) {
  _classCallCheck(this, InputValidator);

  _defineProperty(this, "validate", function () {
    console.log('InputValidator.validate');
  });

  _defineProperty(this, "setuplListeners", function () {
    console.log('InputValidator.setupListeners');
  });

  _defineProperty(this, "showErrors", function () {
    console.log('InputValidator.showErrors');
  });

  console.log('inputValidator() set on: ', selector);
  this.setuplListeners();
  this.validate();
  this.showErrors();
};
//# sourceMappingURL=input-validator.js.map
