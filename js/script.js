function getExpenses() {

};
document.getElementById('expenses-btn').addEventListener('click', function () {
    const totalIncomeField = document.getElementById('total-income');
    const totalIncome = totalIncomeField.value;
    const foodExpensesField = document.getElementById('food-expenses');
    const foodExpenses = foodExpensesField.value;
    const rentExpensesField = document.getElementById('rent-expenses');
    const rentExpenses = rentExpensesField.value;
    const clothesExpensesField = document.getElementById('clothes-expenses');
    const clothesExpenses = clothesExpensesField.value;

    const totalMontlyCost = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalMontlyCost;

    const balance = totalIncome - totalMontlyCost;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = balance;

    foodExpensesField.value = '';
    rentExpensesField.value = '';
    clothesExpensesField.value = '';
    totalIncomeField.value = '';
});

document.getElementById('saving-btn').addEventListener('click', function () {
    const savingPercentageField = document.getElementById('saving-percentage');
    const savingPercentage = parseFloat(savingPercentageField.value);

    const totalIncomeField = document.getElementById('total-income');
    const totalIncome = parseFloat(totalIncomeField.value);

    const savingAmount = (totalIncome * savingPercentage) / 100;

    const totalSavingElement = document.getElementById('total-saving');
    totalSavingElement.innerText = savingAmount;


    const totalExpensesElement = document.getElementById('total-expenses');
    const totalExpenses = parseFloat(totalExpensesElement.innerText)

    const remainingBalance = totalIncome - (totalExpenses + savingAmount);
    const totalRemainingElement = document.getElementById('total-remaining');
    totalRemainingElement.innerText = remainingBalance;


    totalIncomeField.value = '';
    savingPercentageField.value = '';
});