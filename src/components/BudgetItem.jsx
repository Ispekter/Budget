import React from 'react'
import { calculateSpentByBudget, formatCurrency, formatPercentage } from '../helpers'

const BudgetItem = ({ budget }) => {
  const spent = calculateSpentByBudget(budget.id)

  return <div className="budget" style={{'--accent': budget.color }}>
    <div className="progress-text">
      <h3>{budget.name}</h3>
      <p>{formatCurrency(budget.amount)} Budgeted</p>
    </div>
    <progress max={budget.amount} value={spent}>
      { formatPercentage(spent / budget.amount) }
    </progress>
    <div className="progress-text">
      <small>{formatCurrency(spent)} spent</small>
      <small>{formatCurrency(budget.amount - spent)} remaining</small>
    </div>
  </div>
}

export default BudgetItem