class RequiredEmailValidator extends InputValidator{

    //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
    constructor(domElement, emailToCheck){
        
        //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
        super(domElement)
        //remember *this* variable
        this.emailToCheck = emailToCheck

        console.log('RequiredEmailValidator()', domElement, emailToCheck)
    }

    validate = () => {
        console.log('RequiredEmailValidator.validate', this.$field);
        
        this.errors= [];

        let email = this.$field.value;
        
        //regExp= regular expression. searches for patterns. 
        //this one says "any amount of charcters(\\w+)" 
        //the @ symbol any amount of charcters(\\w+)" 
        //any instance of .(\\.)""
        let eVerify = new RegExp('\\w+@\\w+\\.')
        
        
        
        //default setting so error message will apply automatically
        let found = false;
        
        if(eVerify.exec(email)){
            found = true;
            console.log('found a match')
        }
        else{
            console.log('try again')
            console.log("eVerify is: " + eVerify)
       }
        
        if(found == false){
            //add this message to the this.errors array (see InpuValidator)
            this.errors.push('A functional email address is required.' ); 
       }

    }
}


