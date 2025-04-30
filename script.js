let totalIncome = 0, totalExpenses = 0;




function addTransaction() {
    let name = getValue("name"),
        category = getValue("category"),
        type = document.querySelector('input[name="type"]:checked')?.value,
        amount = parseFloat(getValue("amount"));

    if (!name || !category || !type || isNaN(amount) || amount <= 0) {
        return alert("Please enter valid details.");
    }

    document.querySelector("#transactionTable tbody").innerHTML += 
        `<tr><td>${name}</td><td>${category}</td><td>${type}</td><td>${amount.toFixed(2)}</td></tr>`;

    type === "Income" ? (totalIncome += amount) : (totalExpenses += amount);
    
    updateBalance();
}

function updateBalance() {
    setValue("Income1", totalIncome);
    setValue("Expense", totalExpenses);
    setValue("Balance", totalIncome - totalExpenses);

    if (totalExpenses > totalIncome) alert("Wakay budget trabaho sa!");
}

const getValue = id => document.getElementById(id).value;
const setValue = (id, val) => document.getElementById(id).value = val.toFixed(2);

window.onload = setInitialIncome;
