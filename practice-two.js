
const transactions = [
    { type: 'income', amount: 1200 },
    { type: 'expense', amount: 200 },
    { type: 'income', amount: 150 },
    { type: 'expense', amount: 500 },
    { type: 'income', amount: 90 },
    { type: 'expense', amount: 120 }
];

let summary = {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
};

// Use a for loop to iterate through each transaction in the transactions array
for (let i = 0; i < transactions.length; i++) {
    // Check the type of the current transaction
    if (transactions[i].type === 'income') {
        // If it's an income, add the amount to totalIncome
        summary.totalIncome += transactions[i].amount;
    } else if (transactions[i].type === 'expense') {
        // If it's an expense, add the amount to totalExpense
        summary.totalExpense += transactions[i].amount;
    }
}
summary.balance = summary.totalIncome - summary.totalExpense;


// summary now holds the financial summary of the transactions
console.log(summary);