"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//a generic form validator 
var FormValidator = function FormValidator() {
  _classCallCheck(this, FormValidator);

  //elements with [] are DOM attributes.
  console.log('form-Validator() activated');
  new RequiredFieldValidator('[data-required'); //look for any element that has data-required
};
//# sourceMappingURL=form-validator.js.map
