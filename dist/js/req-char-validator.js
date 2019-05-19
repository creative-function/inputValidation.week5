"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RequiredCharValidator =
/*#__PURE__*/
function (_InputValidator) {
  _inherits(RequiredCharValidator, _InputValidator);

  //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
  function RequiredCharValidator(domElement, charactersToCheck) {
    var _this;

    _classCallCheck(this, RequiredCharValidator);

    //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredCharValidator).call(this, domElement)); //remember *this* variable

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      console.log('RequiredCharValidator.validate', _this.$field);
      _this.errors = [];
      var secret = _this.$field.value; //default setting so error message will apply automatically

      var found = false; //characterstoCheck is in an array so for each character in that array, do this:

      _this.charactersToCheck.forEach(function (character) {
        //if secret contains a character in its index
        if (secret.indexOf(character) > -1) {
          console.log("secret is true: " + secret);
          found = true; //switch found to true to the next if statement no longer applies. 
        } else {
          //if it does not find a value
          console.log('invalid');
        }
      });

      if (found == false) {
        //add this message to the this.errors array (see InpuValidator)
        _this.errors.push('the special character is % ');
      }
    });

    _this.charactersToCheck = charactersToCheck;
    console.log('RequiredCharValidator()', domElement, charactersToCheck);
    return _this;
  }

  return RequiredCharValidator;
}(InputValidator);
//# sourceMappingURL=req-char-validator.js.map
