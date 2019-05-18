"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RequiredNumberValidator =
/*#__PURE__*/
function (_InputValidator) {
  _inherits(RequiredNumberValidator, _InputValidator);

  //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
  function RequiredNumberValidator(domElement, numbersToCheck) {
    var _this;

    _classCallCheck(this, RequiredNumberValidator);

    //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredNumberValidator).call(this, domElement)); //remember *this* variable

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      console.log('RequiredNumberValidator.validate', _this.$field);
      _this.errors = [];
      var ageInput = _this.$field.value;
      var first = _this.numbersToCheck[0]; //5

      var last = _this.numbersToCheck[_this.numbersToCheck.length - 1]; //10

      console.log("first is: " + first);
      console.log("input is: " + ageInput);
      console.log("last is: " + last); //default setting so error message will apply automatically

      var found = false;

      if (ageInput > last) {
        console.log(ageInput + ' is TOO BIG to be between ' + first + ' and ' + last);
      } else if (first > ageInput) {
        console.log(ageInput + ' is TOO SMALL to be between ' + first + ' and ' + last);
      } else {
        found = true;

        _this.errors.push('you good, bro.');

        console.log(ageInput + ' is between ' + first + ' and ' + last);
      }

      if (found == false) {
        //add this message to the this.errors array (see InpuValidator)
        _this.errors.push('A legal age is required.');
      }
    });

    _this.numbersToCheck = numbersToCheck;
    console.log('RequiredNumberValidator()', domElement, numbersToCheck);
    return _this;
  }

  return RequiredNumberValidator;
}(InputValidator);
//# sourceMappingURL=req-num-validator.js.map
