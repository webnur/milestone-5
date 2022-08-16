/* 
    step 1: add event handler with the withdraw button
    step 2: get the withdraw amount from the withdraw input field
    step 3: get previous withdraw total
    step 4: calculate total withdraw amount
    step 5: set total withdraw amount
    step 6: get previous balance total 
    step 7: calculate new banalce total
    step 7.5 = set the new balance total


*/
//step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
   
    if(isNaN(newWithdrawAmount)){
        alert('please provite valid number');
        return;
    }


    // step 3
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

   // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString)
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('tumar baper bank a ato taka nai');
        return;
    }


       //step 4
   const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;
   // step 5
   previousWithdrawElement.innerText = totalWithdraw;




    // step 7
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //step 7.5
    balanceTotalElement.innerText = currentBalanceTotal;



   // step 8: clear the input field
   withdrawField.value = '';
})