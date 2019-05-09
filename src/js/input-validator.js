class InputValidator{
    constructor(selector){
        console.log('inputValidator() set on: ', selector);

        this.setuplListeners()
        this.validate()
        this.showErrors()
    }

    validate = () => {
        console.log('InputValidator.validate')

    }
    setuplListeners= () => {
            console.log('InputValidator.setupListeners')
        
    }

    showErrors = () => {
        console.log('InputValidator.showErrors')
        
    }
}