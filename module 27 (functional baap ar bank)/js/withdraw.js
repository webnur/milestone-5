/* 
1. add event listener to the withdraw button
2. get withdraw amount from the withdraw input field;
3. clear the withdraw input field after getting the value 
4. get the previous withdraw total
5. calculate total withdraw amount and set the value to the withdraw total element
6. get previous Balance total
7. calculate the new balance and set it to the balance total element

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

    // step 5 

    const newwithdrawTotal = previousWithdrawTotal + newWithdrawAmount

    withdrawTotalElement.innerText = newwithdrawTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7 

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;






})