import React from 'react'
import { fetchData } from '../helpers'
import Table from '../components/Table'

const ExpensesPage = () => {
  const expenses = JSON.parse(fetchData('expenses')) ?? []

  return (
    <div className="grid-lg">
      <h1>All expenses</h1>
      {
        expenses.length > 0
          ? <div className="grid-md">
            <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
            <Table expenses={expenses} />
          </div>
          : <p>No Expenses to show</p>
      }
    </div>
  )
}

export default ExpensesPage