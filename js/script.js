// Function:: Returns Summation of Expenses:
function getExpenses() {
    let totalExpenses = 0;
    let type = '';
    for (const expense of arguments) {
        let expenseField = document.getElementById(expense + '-expenses');
        let expenseValue = parseFloat(expenseField.value);
        // Type error check
        if ((isNaN(expenseValue) == false) && (expenseValue > 0)) {
            totalExpenses = totalExpenses + expenseValue;
        }
        else {
            type = 'negativeOrString';
        }
        expenseField.value = '';
    }
    if (type == 'negativeOrString') {
        return 'negativeOrString';
    }
    return totalExpenses;
};
// Function:: Returns Income:
function getIncome(income) {
    const incomeField = document.getElementById(income);
    const incomeValue = parseFloat(incomeField.value);
    // Type error check
    if ((isNaN(incomeValue) == false) && (incomeValue > 0)) {
        incomeField.value = '';
        return incomeValue;
    }
    else {
        incomeField.value = '';
        return 'negativeOrString';
    }
}
// Function:: Update the Total Expenses and Balance:
function updateBalanceAndExpences() {
    const totalExpenses = getExpenses('food', 'rent', 'clothes');
    const income = getIncome('total-income');
    // Type error check
    if ((totalExpenses == 'negativeOrString') || (income == 'negativeOrString')) {
        document.getElementById('type-error-expences').style.display = 'block';
        return;
    }
    else {
        document.getElementById('type-error-expences').style.display = 'none';
    }
    // over expenses check
    if (totalExpenses > income) {
        document.getElementById('over-cost-expences').style.display = 'block';
        return;
    }
    else {
        document.getElementById('over-cost-expences').style.display = 'none';
    }
    const expensesElement = document.getElementById('total-expenses');
    expensesElement.innerText = totalExpenses;

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
    const field = document.getElementById(id);
    const fieldValue = parseFloat(field.value);
    field.value = '';
    return fieldValue;
}
// Function:: Update HTML InnerText:
function setInnerElement(id, value) {
    const Element = document.getElementById(id);
    Element.innerText = value.toFixed(2);
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
    // Error: saving > balance
    if (savingAmount > totalBalance) {
        document.getElementById('over-cost-saving').style.display = 'block';
        return;
    }
    else {
        document.getElementById('over-cost-saving').style.display = 'none';
    }
    // Type error check
    if ((isNaN(savingPercentage) == false) && (savingPercentage > 0)) {
        document.getElementById('type-error-saving').style.display = 'none';
    }
    else {
        document.getElementById('type-error-saving').style.display = 'block';
        return;
    }
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