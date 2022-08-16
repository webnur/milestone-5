// step -1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    //step 2: get the deposit amout from the deposit input field
    // always remember to use .value to get text from an input field
    const depositField = document.getElementById('diposit-field');
    // const newDepositAmount = depositField.value;
    const newDepositAmount = parseFloat(depositField.value);

    // step 3: get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    // const previusDepositTotal = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(depositTotalElement.innerText);

    //step 4: add numbers to set the total deposit
    const currentDeposit = previusDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDeposit;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText)

    // step 6: calculate current total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step -7: clear the deposit field
    depositField.value = '';

})