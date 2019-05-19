class RequiredCharValidator extends InputValidator{

    //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
    constructor(domElement, charactersToCheck){
        
        //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
        super(domElement)
        //remember *this* variable
        this.charactersToCheck = charactersToCheck

        console.log('RequiredCharValidator()', domElement, charactersToCheck)
    }

    validate = () => {
        console.log('RequiredCharValidator.validate', this.$field);
        
        this.errors= [];

        let secret = this.$field.value;
        
        //default setting so error message will apply automatically
        let found = false;

        //characterstoCheck is in an array so for each character in that array, do this:
        this.charactersToCheck.forEach(character => {
            //if secret contains a character in its index
            if (secret.indexOf(character)> -1){
               console.log("secret is true: " + secret)
               found = true;
               //switch found to true to the next if statement no longer applies. 
           } else{
                //if it does not find a value
               console.log('invalid')
            }
            
        });
        
        if(found == false){
            //add this message to the this.errors array (see InpuValidator)
            this.errors.push('the special character is % ' ); 
       }

    }
}


