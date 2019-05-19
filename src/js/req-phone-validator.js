class RequiredPhoneValidator extends InputValidator{

    //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
    constructor(domElement, phoneToCheck){
        
        //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
        super(domElement)
        //remember *this* variable
        this.phoneToCheck = phoneToCheck

        console.log('RequiredPhoneValidator()', domElement, phoneToCheck)
    }

    validate = () => {
        console.log('RequiredPhoneValidator.validate', this.$field);
        
        this.errors= [];

        let phone = this.$field.value;
        
        /*Within non-capturing parentheses (?: , 
        the regular expression looks for three numeric characters \d{3} 
        OR |
        a left parenthesis \( 
        followed by three digits \d{3},
        followed by a close parenthesis \), 
        (end non-capturing parenthesis )), 
        followed by one dash, forward slash, 
        or decimal point and when found, 
        remember the character ([-\/\.]), 
        followed by three digits \d{3}, 
        followed by the remembered match of a dash, forward slash, or decimal point \1, 
        followed by four digits \d{4}.*/ 
        let pVerify = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
        
        //default setting so error message will apply automatically
        let found = false;
        
        if(pVerify.exec(phone)){
            found = true;
            console.log('found a match')
        }
        else{
            console.log('try again')
            console.log("pVerify is: " + pVerify)
       }
        
        if(found == false){
            //add this message to the this.errors array (see InpuValidator)
            this.errors.push('A functional phone number is required.' ); 
       }

    }
}


