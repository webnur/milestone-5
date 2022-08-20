

document.getElementById('calculate-button').addEventListener('click', function(){

    const incomeInputField = document.getElementById('income-input');
    const incomeValueString = incomeInputField.value;
    const incomeAmount = parseFloat(incomeValueString)
    console.log(incomeAmount)
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

    
})