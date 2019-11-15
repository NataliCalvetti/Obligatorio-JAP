var creditCard = document.getElementById("creditCardPaymentRadio");
var creditCardValue = document.getElementById("creditCardNumber");
var cardNumberError = document.getElementById("invalidCardNumber");
var lengthRequired = 16;
var securityCode = document.getElementById("creditCardSecurityCode");
var securityCodeError = document.getElementById("noSecurityCode");
var validateDate = document.getElementById("dueDate");
var dateError = document.getElementById("dateError");
var bankingRadio = document.getElementById("bankingRadio");
var bankAccountNumber = document.getElementById("bankAccountNumber");
var bankingLengthRequired = 10;
var bankingNumberError = document.getElementById("invalidBankingNumber");
var shopButton = document.getElementById("shopButton");
var paymentDone = document.querySelector(".paymentDone");
var paymentDoneError = document.querySelector(".paymentDoneError");
var shopDone = document.querySelector(".shopDoneModal");
var paymentModalContainer = document.getElementById("paymentModalContainer")



shopButton.addEventListener('click', () => {
    if((creditCardValue.value !== "" && 
        securityCode.value !== "" && 
        validateDate.value !== "") || (bankAccountNumber.value !== "")) {
            shopDone.style.display = 'block';
            paymentModalContainer.style.display = 'none';
        } else { paymentDoneError.style.display = 'inline-block' };
        
});

    creditCard.addEventListener('input', () => {
        creditCardValue.addEventListener('blur', () => {
            if (creditCardValue.value.length === lengthRequired) {
                const regEx = new RegExp(/^\d+$/);
                if (!regEx.test(creditCardValue.value)){
                    
                    cardNumberError.style.display = 'inline-block';   
                } else {
                    cardNumberError.style.display = 'none';   
                }
            } else {
                    cardNumberError.style.display = 'inline-block';   
            }
        });

        securityCode.addEventListener('blur', () => {
            if(!securityCode.value){
                securityCodeError.style.display = 'inline-block';
            } else {
                securityCodeError.style.display = 'none';
            }
        });

        validateDate.addEventListener('blur', () => {
            let dateValue = validateDate.value.split('/');
            let dateFormat = new Date(dateValue[1], dateValue[0]);
            try {
                if((dateFormat < Date.now()) || (validateDate.value === '')){
                    dateError.style.display = 'inline-block';
                } else {
                    dateError.style.display = 'none';
                }
            }
            catch(e) {
                return false;
            }
            return true;
        });

        bankingRadio.addEventListener('input', () => {
            bankAccountNumber.addEventListener('blur', () => {
                if (bankAccountNumber.value.length <= bankingLengthRequired){
                    bankingNumberError.style.display = 'inline-block';
                } else {
                    bankingNumberError.style.display = 'none';

                }
            })
        })
        
           
        
    });     


    
    




