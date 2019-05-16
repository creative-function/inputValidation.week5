class RequiredCharValidator extends InputValidator{

    //in this constructor we have a second parameter (allowed to exist because inputVaidator has a 2nd optional parameter called options)
    constructor(domElement, charactersToCheck){
        
        //super "call" the domElement constructor that is in InputValidator [constructor(domElement)]
        super(domElement)
        //remember *this* variable as this name (simplify the name in this validator aka this yo nickname when you here)
        this.charactersToCheck = charactersToCheck

        console.log('RequiredCharValidator()', domElement, charactersToCheck)
    }
}