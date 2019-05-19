class InputValidator{

    // a static method is a method (aka function) that can only be called if attactched to its class aka InputValidator/RquiredFieldValidator etc
    //when the init() method is called, it will create a *this* keyword to represent the class that called it. InputValdiator.init() makes *this* = InputValdiator.  RequiredFieldValidator.init() makes *this* = RequredFieldValidator
    //the static init must have an "options" argument (variable name) so that other constructors can add arguments for their own specific needs later on
    static init(selector, options){
        console.log ('Invalidator.init() - I am a static method')

        //select ALL nodes with selector parameter and put them into an array
        const $fields = document.querySelectorAll(selector)
       
        // in the $fields array, for each selector paramter (field), do this thing.
        $fields.forEach(($field)=> {
            // new RequiredFieldValidator($field = '[data-required' , options = variable/argument placeholder (being passed through and will be executed by the validator that finds a need/use for it) )
             new this($field, options)
             // const instance = new this($field) optional variable wrapping
        })
    }


    constructor(domElement){
        console.log('inputValidator() set on: ', domElement);

        this.$field= domElement;
        
        //an empty array to collect error messages (see req-field)
        this.errors = [];

        this.setupListeners()
        this.validate()
        this.showErrors()
    }

    validate = () => {
        console.log('InputValidator.validate')

    }
    setupListeners= () => {
            console.log('InputValidator.setupListeners')


            // on keyup, both aEL will run in the order they were written. 

            // each child class (reqField, formVal) has thier own validator() fucnction insde them with different instructions.
            //on 'keyup' determine which *this* aka child class is being referred to and runs that verson of thier validator() function
            //It does not run immediately because *this* has a changing value and we do not want to bind the function until we know which child class *this* is referring to.
            
            this.$field.addEventListener('keyup', ()=> this.validate())
            
            //this.showErrors binds the callback function waiting below immediatley to the current *this* value.
            //this.showErrors does not use () because we are not running it, just binding it so we know what function to to run later 

            this.$field.addEventListener('keyup', this.showErrors)

           
        
    }

    showErrors = () => {
        
        let previousError = document.querySelector('.errors');
        
        if(previousError !== null){
            document.body.removeChild(previousError);

        }

        let fieldPosition = this.$field.getBoundingClientRect()


        let errorBox = document.createElement("div");
        errorBox.classList.add('errors')
        errorBox.innerHTML = this.errors;
        document.body.append(errorBox);

        errorBox.style.position = "absolute";
        // errorBox.style.height = "25" + "px";
        errorBox.style.borderRadius = '10px'
        errorBox.style.padding = '5px'
        errorBox.style.boxShadow = '0 5px 10px rgba(0,0,0,0.5)'
        errorBox.style.top = fieldPosition.top + 'px';
        errorBox.style.left = fieldPosition.right + 'px';

        if(errorBox.innerHTML){
            this.$field.style.backgroundColor = 'pink';
        }else{
            this.$field.style.backgroundColor = 'white';
            errorBox.style.display ='none';
        } 

        console.log('InputValidator.showErrors', this.errors);
       
    }
}


