import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, postData } from '../helpers'
import BudgetItem from '../components/BudgetItem'
import CreateExpenseForm from '../components/CreateExpenseForm'
import Table from '../components/Table'

const BudgetPage = () => {
  const { id } = useParams()
  const budgets = JSON.parse(fetchData('budgets')) ?? []
  const expenses = JSON.parse(fetchData('expenses')) ?? []

  const budget = budgets.filter(budget => budget.id === id)[0]
  const [budgetExpenses, setBudgetExpenses] = useState(expenses.filter(expense => expense.budgetID === id))

  const setFilteredExpenses = (expenses) => {
    return setBudgetExpenses(expenses.filter(expense => expense.budgetID === id))
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => {
      return expense.id !== id
    })
    postData('expenses', JSON.stringify(updatedExpenses))
    setFilteredExpenses(updatedExpenses)
  }

  return (<>
    { budget
      ? <div className="grid-lg">
        <h1 className="h2">
          <span className="accent">{budget.name}</span> Overview
        </h1>
        <div className="flex-lg">
          <BudgetItem budget={budget} />
          <CreateExpenseForm budgets={[budget]} handleExpenses={setFilteredExpenses} />
        </div>
        {expenses.length > 0 && (
          <div className="grid-md">
            <h2><span className="accent">{budget.name}</span> Expenses</h2>
            <Table expenses={budgetExpenses} handleExpenses={deleteExpense} />
          </div>
        )}
      </div>
      : <h2>Not budget found</h2>
    }
  </>)
}

export default BudgetPage