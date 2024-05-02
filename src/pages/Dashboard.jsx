import React from 'react'
import { fetchData } from '../helpers'
import Intro from '../components/Intro'

const Dashboard = () => {
  const userName = fetchData('userName')

  const createBudget = (event) => {
    event.preventDefault()
    // id, name, amount, color
    const id = crypto.randomUUID()
    const amount = event.target.elements.amount.valueAsNumber
    const name = event.target.elements.name.value
    const color = 'red'

    const budget = {
      id: id,
      amount: amount,
      name: name,
      color: color,
    }

    const existingBudgets = JSON.parse(fetchData('budgets')) ?? []
    localStorage.setItem('budgets', JSON.stringify([...existingBudgets, budget]))

    console.log(budget)
  }

  return (<>
      { userName
        ? <div className="dashboard">
          <h2>Welcome, {userName}</h2>
          <p>Personal budgeting is the secret to financial freedom.</p>
          <p>Create a budget to get started!</p>
          <div className="grid-lg">
            <div className="flex-lg">
              <div className="form-wrapper">
                <h2 className="h3">Create budget</h2>
                <form onSubmit={createBudget} className="grid-sm">
                  <div className="grid-xs">
                    <label htmlFor="name">Budget name</label>
                    <input name="name" id="name" placeholder="e.g., Groceries" required />
                  </div>
                  <div className="grid-xs">
                    <label htmlFor="amount">Amount</label>
                    <input name="amount" id="amount" type="number" placeholder="e.g., 350€" required />
                  </div>
                  <button className="btn btn--dark">
                    <span>Create budget</span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm117.7-588.6c-15.9-3.5-34.4-5.4-55.3-5.4-106.7 0-178.9 55.7-198.6 149.9H344c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H344c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158 20.9 0 39.4-1.7 55.3-5.1 3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8-14.7 2.8-31.9 4.1-51.8 4.1-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H439.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H447.1c17.2-56.9 62.3-90.4 127.6-90.4 19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8z" /></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        : <Intro />
      }
    </>
  )
}

export default Dashboard