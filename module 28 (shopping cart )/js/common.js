function getTextElementById(elementId){
    const phoneTotalElement =  document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString );
    return currentPhoneTotal;
}

function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
 

    setTextElementById('sub-total', currentSubTotal);

    const textAmountString = (currentSubTotal * 0.1).toFixed(2);
    const textAmount = parseFloat(textAmountString)
    setTextElementById('text-amount', textAmount);

    const finalAmount = currentSubTotal + textAmount;
    setTextElementById('final-total', finalAmount)


}