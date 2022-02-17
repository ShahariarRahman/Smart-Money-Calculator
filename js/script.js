// Function:: Returns Summation of Expenses:
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
// Function:: Returns Income:
function getIncome(income) {
    const incomeField = document.getElementById(income);
    const incomeValue = parseFloat(incomeField.value);
    incomeField.value = '';
    return incomeValue;
}

// Function:: Update the Total Expenses and Balance:
function updateBalanceAndExpences() {
    const totalExpenses = getExpenses('food', 'rent', 'clothes');
    const expensesElement = document.getElementById('total-expenses');
    expensesElement.innerText = totalExpenses;

    const income = getIncome('total-income');
    const balance = income - totalExpenses;
    const balanceElement = document.getElementById('total-balance');
    balanceElement.innerText = balance;
}
// Function:: Returns HTMl InnerText in Float:
function getInnerElement(id) {
    const element = document.getElementById('total-' + id);
    const value = parseFloat(element.innerText);
    return value;
}
// Function:: Returns Input Field's value in Float:
function getFieldValue(id) {
    const savingPercentageField = document.getElementById(id);
    const savingPercentage = parseFloat(savingPercentageField.value);
    savingPercentageField.value = '';
    return savingPercentage;
}
// Function:: Update HTML InnerText:
function setInnerElement(id, value) {
    const totalSavingElement = document.getElementById(id);
    totalSavingElement.innerText = value.toFixed(2);
}
// Function:: Update Saving Amount and Remaining Balance:
function updateSaveAndRemining() {
    const savingPercentage = getFieldValue('saving-percentage');
    const totalExpenses = getInnerElement('expenses');
    const totalBalance = getInnerElement('balance');

    let totalIncome = totalExpenses + totalBalance;
    const income = getIncome('total-income');
    if (isNaN(income) != true) {
        totalIncome = income;
    }
    const savingAmount = (totalIncome * savingPercentage) / 100;

    setInnerElement('total-saving', savingAmount);

    const remainingBalance = totalIncome - (totalExpenses + savingAmount);
    setInnerElement('total-remaining', remainingBalance);
}
// Event handler:: for Calculate Button:
document.getElementById('expenses-btn').addEventListener('click', function () {
    updateBalanceAndExpences();
});
// Event handler:: for Save Button:
document.getElementById('saving-btn').addEventListener('click', function () {
    updateSaveAndRemining();
});