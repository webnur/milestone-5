/* 
1. add event listener to the withdraw button
2. get withdraw amount from the withdraw input field;
3. clear the withdraw input field after getting the value 
4. get the previous withdraw total
*/

// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3
    withdrawField.value = '';

    // step 5 


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    




})