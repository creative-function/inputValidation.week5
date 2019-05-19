"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputValidator =
/*#__PURE__*/
function () {
  _createClass(InputValidator, null, [{
    key: "init",
    // a static method is a method (aka function) that can only be called if attactched to its class aka InputValidator/RquiredFieldValidator etc
    //when the init() method is called, it will create a *this* keyword to represent the class that called it. InputValdiator.init() makes *this* = InputValdiator.  RequiredFieldValidator.init() makes *this* = RequredFieldValidator
    //the static init must have an "options" argument (variable name) so that other constructors can add arguments for their own specific needs later on
    value: function init(selector, options) {
      var _this = this;

      console.log('Invalidator.init() - I am a static method'); //select ALL nodes with selector parameter and put them into an array

      var $fields = document.querySelectorAll(selector); // in the $fields array, for each selector paramter (field), do this thing.

      $fields.forEach(function ($field) {
        // new RequiredFieldValidator($field = '[data-required' , options = variable/argument placeholder (being passed through and will be executed by the validator that finds a need/use for it) )
        new _this($field, options); // const instance = new this($field) optional variable wrapping
      });
    }
  }]);

  function InputValidator(domElement) {
    var _this2 = this;

    _classCallCheck(this, InputValidator);

    _defineProperty(this, "validate", function () {
      console.log('InputValidator.validate');
    });

    _defineProperty(this, "setupListeners", function () {
      console.log('InputValidator.setupListeners'); // on keyup, both aEL will run in the order they were written. 
      // each child class (reqField, formVal) has thier own validator() fucnction insde them with different instructions.
      //on 'keyup' determine which *this* aka child class is being referred to and runs that verson of thier validator() function
      //It does not run immediately because *this* has a changing value and we do not want to bind the function until we know which child class *this* is referring to.

      _this2.$field.addEventListener('keyup', function () {
        return _this2.validate();
      }); //this.showErrors binds the callback function waiting below immediatley to the current *this* value.
      //this.showErrors does not use () because we are not running it, just binding it so we know what function to to run later 


      _this2.$field.addEventListener('keyup', _this2.showErrors);
    });

    _defineProperty(this, "showErrors", function () {
      var previousError = document.querySelector('.errors');

      if (previousError !== null) {
        document.body.removeChild(previousError);
      }

      var fieldPosition = _this2.$field.getBoundingClientRect();

      var errorBox = document.createElement("div");
      errorBox.classList.add('errors');
      errorBox.innerHTML = _this2.errors;
      document.body.append(errorBox);
      errorBox.style.position = "absolute"; // errorBox.style.height = "25" + "px";

      errorBox.style.borderRadius = '10px';
      errorBox.style.padding = '5px';
      errorBox.style.boxShadow = '0 5px 10px rgba(0,0,0,0.5)';
      errorBox.style.top = fieldPosition.top + 'px';
      errorBox.style.left = fieldPosition.right + 'px';

      if (errorBox.innerHTML) {
        _this2.$field.style.backgroundColor = 'pink';
      } else {
        _this2.$field.style.backgroundColor = 'white';
        errorBox.style.display = 'none';
      }

      console.log('InputValidator.showErrors', _this2.errors);
    });

    console.log('inputValidator() set on: ', domElement);
    this.$field = domElement; //an empty array to collect error messages (see req-field)

    this.errors = [];
    this.setupListeners();
    this.validate();
    this.showErrors();
  }

  return InputValidator;
}();
//# sourceMappingURL=input-validator.js.map
