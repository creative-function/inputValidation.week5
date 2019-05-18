"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//a generic form validator 
var FormValidator = function FormValidator() {
  _classCallCheck(this, FormValidator);

  //elements with [] are DOM attributes.
  console.log('form-Validator() activated'); // new RequiredFieldValidator('[data-required') //look for any element that has data-required
  //use the statc method init() to pass the selector, using the static method as its entry into the next constructor

  RequiredFieldValidator.init('[data-required]');
  RequiredCharValidator.init('[data-required="characters"]', ["%"]);
  RequiredEmailValidator.init('[data-validate="email"]');
  RequiredNumberValidator.init('[data-validate="number"]', ['21', '25']);
};
//# sourceMappingURL=form-validator.js.map
