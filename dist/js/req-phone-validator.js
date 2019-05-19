"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RequiredPhoneValidator =
/*#__PURE__*/
function (_InputValidator) {
  _inherits(RequiredPhoneValidator, _InputValidator);

  //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
  function RequiredPhoneValidator(domElement, phoneToCheck) {
    var _this;

    _classCallCheck(this, RequiredPhoneValidator);

    //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredPhoneValidator).call(this, domElement)); //remember *this* variable

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      console.log('RequiredPhoneValidator.validate', _this.$field);
      _this.errors = [];
      var phone = _this.$field.value;
      /*Within non-capturing parentheses (?: , 
      the regular expression looks for three numeric characters \d{3} 
      OR |
      a left parenthesis \( 
      followed by three digits \d{3},
      followed by a close parenthesis \), 
      (end non-capturing parenthesis )), 
      followed by one dash, forward slash, 
      or decimal point and when found, 
      remember the character ([-\/\.]), 
      followed by three digits \d{3}, 
      followed by the remembered match of a dash, forward slash, or decimal point \1, 
      followed by four digits \d{4}.*/

      var pVerify = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/; //default setting so error message will apply automatically

      var found = false;

      if (pVerify.exec(phone)) {
        found = true;
        console.log('found a match');
      } else {
        console.log('try again');
        console.log("pVerify is: " + pVerify);
      }

      if (found == false) {
        //add this message to the this.errors array (see InpuValidator)
        _this.errors.push('A functional phone number is required.');
      }
    });

    _this.phoneToCheck = phoneToCheck;
    console.log('RequiredPhoneValidator()', domElement, phoneToCheck);
    return _this;
  }

  return RequiredPhoneValidator;
}(InputValidator);
//# sourceMappingURL=req-phone-validator.js.map
