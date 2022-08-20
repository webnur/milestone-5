function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const valueString = inputField.value;
    const value = parseFloat(valueString);
    return value;
}

function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
document.getElementById('calculate-button').addEventListener('click', function(){

    //get income amount
    const incomeAmount = getInputValue('income-input');
    // console.log(incomeAmount)

    // total food cost
    const foodCost = getInputValue('food-cost');
     
    // total rent cost 
    const totalRentCost = getInputValue('rent-cost');
    
    // total cloths price
    const clothPrice = getInputValue('cloth-price');

    // total money expence 
    const totalMoneyExpence = foodCost + totalRentCost + clothPrice;
    // const showTotalExpence = document.getElementById('total-expenses');
    //  showTotalExpence.innerText = totalMoneyExpence
    setElementValue('total-expenses', totalMoneyExpence)

    // balance update after expence money 
    const updateBalance = incomeAmount - totalMoneyExpence
    setElementValue('update-balace', updateBalance)
   
   

    
})

document.getElementById('save-button').addEventListener('click', function(){

    const incomeAmount = getInputValue('income-input');

    const saveAmount = getInputValue('save-amount-input');  

    // total expences
    const totalExpensesElement = document.getElementById('total-expenses');
    const totalExpenses = parseFloat(totalExpensesElement.innerText)

    const saveTotal = (saveAmount / 100) * incomeAmount;

  
    setElementValue('save-amount-value', saveTotal)


    const remainingBalance = incomeAmount - (saveTotal + totalExpenses)
    setElementValue('remaining-balance', remainingBalance)


})