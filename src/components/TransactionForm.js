import React, { useContext, useState } from 'react'
import { AccountSelect } from './AccountSelect'
import { IncomeExpenseSwitch } from './IncomeExpenseSwitch'
import { GlobalContext } from '../context/GlobalContext';

export const TransactionForm = () => {

    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [bank, setBank] = React.useState('');
    const [sign, setSign] = React.useState(false);

    const { addTransaction } = useContext(GlobalContext);

    const handleAccountChange = (value) => {
        console.log("handleAccountChange in TransactionForm:");
        console.log(value);
        setBank(value);
    }

    const handleSignChange = (value) => {
        console.log("Sign change in TransactionForm:");
        console.log(value);
        setSign(value);
        setAmount(amount);
    }

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), //TODO: more unic id
            bank,
            text,
            amount: (sign) ? Number(amount) : -1*Number(amount)
        }

        addTransaction(newTransaction);
    }
  return (
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <input type="text" placeholder="Text..." value={text} onChange={(e) => {setText(e.target.value)}}/>
            <input type="number" placeholder="Amount..." value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
            <AccountSelect onChange={handleAccountChange} />
            <IncomeExpenseSwitch onChange={handleSignChange}/>
        </div>
        <button className="btn">ADD</button>
    </form>
  )
}
