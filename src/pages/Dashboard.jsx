import React, { useState } from 'react'
import { fetchData, postData } from '../helpers'
import Intro from '../components/Intro'
import CreateBudgetForm from '../components/CreateBudgetForm'

const Dashboard = () => {
  const userName = fetchData('userName')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const budgets = JSON.parse(fetchData('budgets'))
  console.log(budgets)

  const createNewExpense = (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const expense = {
      id: crypto.randomUUID(),
      name: event.target.elements.expenseName.value,
      amount: event.target.elements.expenseAmount.valueAsNumber,
      budgetID: event.target.elements.budgetId.value,
    }
    
    setTimeout(() => {
      const previousExpenses = JSON.parse(fetchData('expenses')) ?? []
      postData('expenses', JSON.stringify([...previousExpenses, expense]))
      event.target.elements.expenseName.value = ''
      event.target.elements.expenseAmount.valueAsNumber = undefined
      setIsSubmitting(false)
    }, 2500)
  }

  return (<>
      { userName
        ? <div className="dashboard">
          <h2>Welcome, {userName}</h2>
          <p>Personal budgeting is the secret to financial freedom.</p>
          <p>Create a budget to get started!</p>
          <CreateBudgetForm />
          <div className="form-wrapper">
            <h2 className="h3">Add New Expense</h2>
            <form className="grid-sm" onSubmit={createNewExpense}>
              <div className="expense-inputs">
                <div className="grid-xs">
                  <label htmlFor="expenseName">Expense Name</label>
                  <input name="expenseName" id="expenseName" placeholder="e.g., Coffee" required />
                </div>
                <div className="grid-xs">
                  <label htmlFor="expenseAmount">Amount</label>
                  <input name="expenseAmount" id="expenseAmount" step="0.01" type="number" placeholder="e.g., 3.50 €" required />
                </div>
              </div>
              <div className="grid-xs">
                <label htmlFor="budgetId">Budget category</label>
                <select id="budgetId" name="budgetId">
                  {
                    budgets
                      .map(budget => {
                        return <option key={budget.id} value={budget.id}>{budget.name}</option>
                      })
                  }
                </select>
              </div>
              <button className="btn btn--dark">
                {
                  isSubmitting 
                    ? <span>Submitting...</span>
                    : <>
                    <span>Add Expense</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" /></svg>
                  </>
                }
              </button>
            </form>
          </div>
        </div>
        : <Intro />
      }
    </>
  )
}

export default Dashboard