export const fetchData = (key) => {
  return localStorage.getItem(key)
}

export const postData = (key, value) => {
  return localStorage.setItem(key, value)
}

export const deleteItem = (key) => {
	return localStorage.removeItem(key)
}

export const formatPercentage = (value) => {
  return value.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
  })
}

export const formatCurrency = (value) => {
  return value.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
  })
}

export const calculateSpentByBudget = (budgetID) => {
  const expenses = JSON.parse(fetchData("expenses")) ?? []
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetID !== budgetID) {
      return acc
    }

    return acc += expense.amount
  }, 0)
  return budgetSpent;
}