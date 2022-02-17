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
function updateExpenses() {
    const totalExpenses = getExpenses('food', 'rent', 'clothes');
    if (totalExpenses > 0) {
        const expensesElement = document.getElementById('total-expenses');
        expensesElement.innerText = totalExpenses;
        return totalExpenses;
    }
    else {
        // give error massage
    }

}

function updateBalanceAndExpences() {
    const income = getIncome('total-income');

    const totalExpenses = updateExpenses();

    const balance = income - totalExpenses;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = balance;
    return { income, totalExpenses, balance };
}


document.getElementById('expenses-btn').addEventListener('click', function () {
    updateBalanceAndExpences();
});

document.getElementById('saving-btn').addEventListener('click', function () {
    const array = updateBalanceAndExpences();
    const savingPercentageField = document.getElementById('saving-percentage');
    const savingPercentage = parseFloat(savingPercentageField.value);


    const totalIncome = array.income;

    const savingAmount = (totalIncome * savingPercentage) / 100;

    const totalSavingElement = document.getElementById('total-saving');
    totalSavingElement.innerText = savingAmount;


    const totalExpensesElement = document.getElementById('total-expenses');
    const totalExpenses = parseFloat(totalExpensesElement.innerText)

    const remainingBalance = totalIncome - (totalExpenses + savingAmount);
    const totalRemainingElement = document.getElementById('total-remaining');
    totalRemainingElement.innerText = remainingBalance;



    savingPercentageField.value = '';
});