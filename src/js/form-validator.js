//a generic form validator 


class FormValidator{
    constructor(){
        //elements with [] are DOM attributes.
        console.log('form-Validator() activated');
        // new RequiredFieldValidator('[data-required') //look for any element that has data-required

        //use the statc method init() to pass the selector, using the static method as its entry into the next constructor
        RequiredFieldValidator.init('[data-required]');
    }
}