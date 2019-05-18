"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RequiredEmailValidator =
/*#__PURE__*/
function (_InputValidator) {
  _inherits(RequiredEmailValidator, _InputValidator);

  //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
  function RequiredEmailValidator(domElement, emailToCheck) {
    var _this;

    _classCallCheck(this, RequiredEmailValidator);

    //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredEmailValidator).call(this, domElement)); //remember *this* variable

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      console.log('RequiredEmailValidator.validate', _this.$field);
      _this.errors = [];
      var email = _this.$field.value; //regExp= regular expression. searches for patterns. 
      //this one says "any amount of charcters(\\w+)" 
      //the @ symbol any amount of charcters(\\w+)" 
      //any instance of .(\\.)""

      var eVerify = new RegExp('\\w+@\\w+\\.'); //default setting so error message will apply automatically

      var found = false;

      if (eVerify.exec(email)) {
        found = true;
        console.log('found a match');
      } else {
        console.log('try again');
        console.log("eVerify is: " + eVerify);
      }

      if (found == false) {
        //add this message to the this.errors array (see InpuValidator)
        _this.errors.push('A functional email address is required.');
      }
    });

    _this.emailToCheck = emailToCheck;
    console.log('RequiredEmailValidator()', domElement, emailToCheck);
    return _this;
  }

  return RequiredEmailValidator;
}(InputValidator);
//# sourceMappingURL=req-email-validator.js.map
