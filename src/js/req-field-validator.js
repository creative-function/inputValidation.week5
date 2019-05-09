// 'extends' faciliates the inheritence of a function's properties into another

class RequiredFieldValidator extends InputValidator {
    constructor(selector){
        super(selector) // super() is a keyword that passes through 'selector', the parameter from the parent constructor  
        console.log('req-field-Validator()activated for: ', selector);
    }
    
    // a child class(RFV) MUST have a "validate" function to estaliblsh a convention 
    validate = () => {
        console.log('RequiredFieldValidator.validate')

    }
   
}


// RequiredFieldValidator(RFV) extends into InputValidator(IV), 
//the product of IV will be set into a *this* variable, allowing it to be accessible in any function that inherits it.  
//uper() is a keyword that passes through 'selector', the parameter from the parent constructor a.k.a the function paramater behing inherited from
