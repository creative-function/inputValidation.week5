// 'extends' faciliates the inheritence of a function's properties into another

class RequiredFieldValidator extends InputValidator {
    constructor(domElement){
        super(domElement) // super() is a keyword that passes through 'domElement', the parameter from the parent constructor (InputValidator) 
        console.log('req-field-Validator()activated for: ', domElement);
    }
    
    // a child class(RFV) MUST have a "validate" function to estaliblsh a convention 
    validate = () => {
        console.log('RequiredFieldValidator.validate', this.$field);
        
        this.errors= [];

       if (this.$field.value){
           console.log('valid!')
       } else{

            //if it has no value
           console.log('invalid')
           //add this message to the this.errors array (see InpuValidator)
           this.errors.push('This field is required.')
           
       }

    }
   
}

// super(domElement)
// RequiredFieldValidator(RFV) extends into InputValidator(IV), 
//the product of IV will be set into a *this* variable, allowing it to be accessible in any function that inherits it.  
//super() is a keyword that passes through 'domElement', the parameter from the parent constructor a.k.a the function paramater behing inherited from
