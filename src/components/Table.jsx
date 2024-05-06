import React from 'react'
import { fetchData, formatCurrency, postData } from '../helpers'
import { Link } from 'react-router-dom'

const Table = ({ expenses, handleExpenses }) => {

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(expense => {
              const budgets = JSON.parse(fetchData('budgets')) ?? []
              const budget = budgets.filter(budget => budget.id === expense.budgetID)[0]
              console.log(budget)
              return <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{formatCurrency(expense.amount)}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>{ budget && <Link to={`/budget/${budget.id}`}>{budget.name}</Link> }</td>
                <td>
                  <button onClick={() => handleExpenses(expense.id)} type="button" className="btn btn--warning">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                  </button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table