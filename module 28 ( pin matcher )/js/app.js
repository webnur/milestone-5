
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else {
        // console.log('pin less then 4', pin)
        return getPin()
    }
}

function generatePin(){

    const random = Math.round(Math.random()* 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // console.log(pin)

    const displayPinField = document.getElementById('display-pin');
    displayPinField .value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    // console.log(number)
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits
        }
    }
    else {
        const newTypeNumber = previousTypedNumber + number
        typedNumberField.value = newTypeNumber;
    }



})