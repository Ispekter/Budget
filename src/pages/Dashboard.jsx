import React, { useState } from 'react'
import { fetchData } from '../helpers'
import Intro from '../components/Intro'
import CreateBudgetForm from '../components/CreateBudgetForm'
import CreateExpenseForm from '../components/CreateExpenseForm'
import BudgetItem from '../components/BudgetItem'
import Table from '../components/Table'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const userName = fetchData('userName')
  const [budgets, setBudgets] = useState(JSON.parse(fetchData('budgets')) ?? [])
  const [expenses, setExpenses] = useState(JSON.parse(fetchData('expenses')) ?? [])

  return (<>
      { userName
        ? <div className="dashboard">
          <h2>Welcome, {userName}</h2>
          <p>Personal budgeting is the secret to financial freedom.</p>
          <p>Create a budget to get started!</p>
          <div className="grid-lg">
            <div className="flex-lg">
              <CreateBudgetForm handleBudgets={setBudgets} />
              { budgets.length > 0 && <CreateExpenseForm budgets={budgets} /> }
            </div>
          { budgets.length > 0 && <>
            <h2>Existing budgets</h2>
            <div className="budgets">
              {
                budgets.map(budget => {
                  return <BudgetItem key={budget.id} budget={budget} />
                })
              }
            </div>
          </>
          }
          { expenses.length > 0 && 
            <div className="grid-md">
              <h2>Recent expenses</h2>
              <Table expenses={expenses} />
              <Link to="/expenses" className="btn btn--dark">
                View all expenses
              </Link>
            </div>
          }
          </div>
        </div>
        : <Intro />
      }
    </>
  )
}

export default Dashboard