/* 
1. withdraw button event handler

*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWidthAmount = getInputFieldValueById('withdraw-field');

    // get withdraw total by id
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    // calculate total widthraw amount
    const totalWidthraw = previousWithdrawTotal + newWidthAmount

    // set withdraw total
    setTextElementValueById('withdraw-total', totalWidthraw);

    // get previous balance 
    const previousbalanceTotal = getElementValueById('balance-total');

    // calculte new balance after withdraw
    const newBalanceTotal = previousbalanceTotal - newWidthAmount;

    // set new balance total
    setTextElementValueById('balance-total', newBalanceTotal);

})