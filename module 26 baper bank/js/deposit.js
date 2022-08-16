// step -1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    //step 2: get the deposit amout from the deposit input field
    // always remember to use .value to get text from an input field
    const depositField = document.getElementById('diposit-field');
    const depositAmount = depositField.value;
    // console.log(depositAmount)


    // step 3: get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})