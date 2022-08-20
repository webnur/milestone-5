

document.getElementById('calculate-button').addEventListener('click', function(){

    const incomeInputField = document.getElementById('income-input');
    const incomeValueString = incomeInputField.value;
    const incomeAmount = parseFloat(incomeValueString)
    incomeInputField.value = '';

    // food cose
    const foodCost = document.getElementById('food-cost');
    const foodCostString = foodCost.value;
    const totalFoodCost = parseFloat(foodCostString);
    foodCost.value = '';

    // rent cost
    const rentCost = document.getElementById('rent-cost');
    const rentCostString = rentCost.value;
    const totalRentCost = parseFloat(rentCostString);
    rentCost.value = ''

    // cloth price
    const clothPrice = document.getElementById('cloth-price');
    const clothpiceString = clothPrice.value;
    const totalClothPrice = parseFloat(clothpiceString);
    clothPrice.value = '';
    
    // total-expenses
    const totalExpenses = totalFoodCost + totalRentCost + totalClothPrice; 
    const totalExpensesShow = document.getElementById('total-expenses');
    totalExpensesShow.innerText = totalExpenses;

    // update balance 

    const updateBalance = incomeAmount - totalExpenses;
    const updateBalanceShow = document.getElementById('update-balace');
    updateBalanceShow.innerText = updateBalance;

    // const saveAmount = incomeAmount - (incomeAmount * savingAmount / 100);


    
})

document.getElementById('save-button').addEventListener('click', function(){

    const incomeInputField = document.getElementById('income-input');
    const incomeValueString = incomeInputField.value;
    const incomeAmount = parseFloat(incomeValueString)
    incomeInputField.value = '';

    const savingAmountField = document.getElementById('save-amount-input');
    const savingString = savingAmountField.value;
    const savingAmount = parseFloat(savingString);

    // const totalSave = incomeAmount / savingAmount;
    const totalSave = (savingAmount / 100) * incomeAmount

    const showSaveAmount = document.getElementById('save-amount-value');

    showSaveAmount.innerText = totalSave;

})