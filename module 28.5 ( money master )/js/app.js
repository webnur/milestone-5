

document.getElementById('calculate-button').addEventListener('click', function(){

    const incomeInputField = document.getElementById('income-input');
    const incomeValueString = incomeInputField.value;
    const incomeAmount = parseFloat(incomeValueString)
    console.log(incomeAmount)

    // food cose
    const foodCost = document.getElementById('food-cost');
    const foodCostString = foodCost.value;
    const totalFoodCost = parseFloat(foodCostString);

    // rent cost
    const rentCost = document.getElementById('rent-cost');
    const rentCostString = rentCost.value;
    const totalRentCost = parseFloat(rentCostString);

    // cloth price
    const clothPrice = document.getElementById('cloth-price');
    const clothpiceString = clothPrice.value;
    const totalClothPrice = parseFloat(clothpiceString);
    
    // total-expenses
    const totalExpenses = totalFoodCost + totalRentCost + totalClothPrice; 
    const totalExpensesShow = document.getElementById('total-expenses');
    totalExpensesShow.innerText = totalExpenses;
    
})