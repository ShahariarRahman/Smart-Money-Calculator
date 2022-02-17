function getExpenses() {
    let totalExpenses = 0;
    for (const expense of arguments) {
        let expenseField = document.getElementById(expense + '-expenses');
        let expenseValue = parseFloat(expenseField.value);
        totalExpenses = totalExpenses + expenseValue;
        expenseField.value = '';
    }
    return totalExpenses;
};
function getIncome(income) {
    const incomeField = document.getElementById(income);
    const incomeValue = parseFloat(incomeField.value);
    incomeField.value = '';
    return incomeValue;
}

function expensesUpdate() {
    const totalMontlyCost = getExpenses('food', 'rent', 'clothes');
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalMontlyCost;
    return totalMontlyCost;
}
function balanceUpdate() {
    const totalIncome = getIncome('total-income');

    const totalMontlyCost = expensesUpdate();

    const balance = totalIncome - totalMontlyCost;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = balance;
}


document.getElementById('expenses-btn').addEventListener('click', function () {
    balanceUpdate();
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