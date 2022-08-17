

document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value a number 
    */
   const newDepositAmount = getInputFieldValueById('deposit-field')
   console.log(newDepositAmount)

   /* 
        1. get deposit total by id
   */

    const previousDepositTotal = getElementValueById('deposit-total');

    // calculate new deposit total 

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using function

    const previousBalanceTotal = getElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set total balance value
    setTextElementValueById('balance-total', newBalanceTotal)

})