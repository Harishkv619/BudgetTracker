document.addEventListener("DOMContentLoaded",()=>{
    const incomeForm = document.getElementById("income-form")
    const incomeAmount = document.getElementById("income-amount")

    const expenseForm = document.getElementById("expense-form")
    const expenseAmount = document.getElementById("expenseAmount")
    const expenseDesc = document.getElementById("expenseDesc")
    const expenseCategory = document.getElementById("expenseCategory")
    const expenseList = document.getElementById("expense-list")

    const displayIncome = document.getElementById("displayIncome")
    const balanceElement= document.getElementById("balance")

    let income = 0
    let expenses=[]

    // Income - eventListener

    incomeForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        income = parseInt(incomeAmount.value)
        incomeAmount.value=""
        displayIncome.textContent=`Income is Rs ${income}`
        updateBalance();
    })


    const addExpenseToList = (expense) => {
        const listItem = document.createElement("li")
        listItem.className = "list-group-item"
        listItem.textContent = `${expense.description}: Rs ${expense.amount} (${expense.category})`
        expenseList.appendChild(listItem)
    };
    // EXpense - event Listener

    expenseForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const expense={
            description: expenseDesc.value,
            amount:parseInt(expenseAmount.value),
            category:expenseCategory.value

        }
        addExpenseToList(expense)
        expenses.push(expense)
        expenseDesc.value=""
        expenseAmount.value=""
        expenseCategory.value="Food"
        updateBalance();
    })

    // Budget Summary-update

    const updateBalance = ()=>{
        const totalExpenses = expenses.reduce((sum,expense)=>sum+expense.amount,0)
        const balance = income-totalExpenses
        balanceElement.textContent=`Balance is Rs ${balance}`

    }
})