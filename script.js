const balance = document.querySelector('#currentBalance');
const income = document.querySelector('#lifeIncome');

const activityInput = document.getElementById('activity');
const amountInput = document.getElementById('amount');

const addbtn = document.getElementById('addBtn');
const delbtn = document.getElementById('delBtn');

const transactionList = document.querySelector('.transaction-list');
const toggleTransactionBtn = document.getElementById("toggleTransactionBtn");
const transactionSection = document.querySelector('#add-transaction');

let Balance = 0;
let Income = 0;

function updateUi() {
    balance.textContent = `৳ ${Balance.toFixed(2)}`;
    income.textContent = `৳ ${Income.toFixed(2)}`;
}

function addTransaction(activity, amount, type) {
    const transaction = document.createElement('li');
    transaction.classList.add('transaction');
    transaction.innerHTML = `
        <span>${activity}</span>
        <span class="${type === "income" ? "income" : "cost"}">৳${amount.toFixed(2)}</span>
    `;
    transactionList.appendChild(transaction);
}

toggleTransactionBtn.addEventListener("click", () => {
    transactionSection.classList.toggle("visible");
    transactionSection.classList.toggle("hidden");
    
});


addbtn.addEventListener('click', () => {
    const activity = activityInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!activity || isNaN(amount) || amount <= 0) {
        alert('Please enter valid activity and amount');
        return;
    }

    Balance += amount;
    Income += amount;

    addTransaction(activity, amount, 'income');
    activityInput.value = '';
    amountInput.value = '';
    updateUi();
});

delbtn.addEventListener('click', () => {
    const activity = activityInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!activity || isNaN(amount) || amount <= 0) {
        alert('Please enter valid activity and amount');
        return;
    }

    Balance -= amount;
    

    addTransaction(activity, amount, 'cost');
    activityInput.value = '';
    amountInput.value = '';
    updateUi();
});