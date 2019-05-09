//a generic form validator 


class FormValidator{
    constructor(){
        //elements with [] are DOM attributes.
        console.log('form-Validator() activated');
        new RequiredFieldValidator('[data-required') //look for any element that has data-required
    }
}