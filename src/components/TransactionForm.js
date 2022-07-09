import React from 'react'
import { AccountSelect } from './AccountSelect'
import { IncomeExpenseSwitch } from './IncomeExpenseSwitch'

export const TransactionForm = () => {
  return (
    <form onSubmit>
        <div className="form-control">
            <input type="text" placeholder="Text..." />
            <input type="number" placeholder="Amount..." />
            <AccountSelect />
            <IncomeExpenseSwitch />
        </div>
        <button className="btn">ADD</button>
    </form>
  )
}
