"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 'extends' faciliates the inheritence of a function's properties into another
var RequiredFieldValidator =
/*#__PURE__*/
function (_InputValidator) {
  _inherits(RequiredFieldValidator, _InputValidator);

  function RequiredFieldValidator(selector) {
    var _this;

    _classCallCheck(this, RequiredFieldValidator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredFieldValidator).call(this, selector)); // super() is a keyword that passes through 'selector', the parameter from the parent constructor  

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      console.log('RequiredFieldValidator.validate');
    });

    console.log('req-field-Validator()activated for: ', selector);
    return _this;
  } // a child class(RFV) MUST have a "validate" function to estaliblsh a convention 


  return RequiredFieldValidator;
}(InputValidator); // RequiredFieldValidator(RFV) extends into InputValidator(IV), 
//the product of IV will be set into a *this* variable, allowing it to be accessible in any function that inherits it.  
//uper() is a keyword that passes through 'selector', the parameter from the parent constructor a.k.a the function paramater behing inherited from
//# sourceMappingURL=req-field-validator.js.map
