class RequiredNumberValidator extends InputValidator{

    //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
    constructor(domElement, numbersToCheck){
        
        //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
        super(domElement)
        //remember *this* variable
        this.numbersToCheck = numbersToCheck

        console.log('RequiredNumberValidator()', domElement, numbersToCheck)
    }

    validate = () => {
        console.log('RequiredNumberValidator.validate', this.$field);
        
        this.errors= [];

        let ageInput = this.$field.value;

        
        let first = this.numbersToCheck[0]; //5
        
        let last = this.numbersToCheck[this.numbersToCheck.length - 1]; //10
        
        console.log ("first is: " + first)
        console.log("input is: " + ageInput)
        console.log ("last is: " + last)

        //default setting so error message will apply automatically
        let found = false;

       
       if(ageInput > last){
        console.log(ageInput + ' is TOO BIG to be between ' + first + ' and ' + last)
        } else if(first > ageInput){
            console.log(ageInput + ' is TOO SMALL to be between ' + first + ' and ' + last)
        }else{
           found = true;
           this.errors.push('you good, bro.' ); 
           console.log(ageInput + ' is between ' + first + ' and ' + last)
       }
        
        if(found == false){
            //add this message to the this.errors array (see InpuValidator)
            this.errors.push('A legal age is required.' ); 
       }

    }
}



