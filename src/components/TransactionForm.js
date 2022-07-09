import React, { useContext, useState } from 'react'
import { AccountSelect } from './AccountSelect'
import { IncomeExpenseSwitch } from './IncomeExpenseSwitch'
import { GlobalContext } from '../context/GlobalContext';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';

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
        console.log("On Submit!!!!!!");
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
    <Grid item>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField sx={{m: 2}} fullWidth label="Text" variant="outlined" type="text" placeholder="Text..." value={text} onChange={(e) => {setText(e.target.value)}}/>
                <TextField sx={{m: 2}} fullWidth label="Amount" variant="outlined" type="number" placeholder="Amount..." value={amount} onChange={(e) => {setAmount(e.target.value)}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Rial</InputAdornment>,//TODO: this can be a 'Rial icon' :D
                    }}/>
                <AccountSelect onChange={handleAccountChange} />
                <IncomeExpenseSwitch onChange={handleSignChange}/>
                <Button sx={{m:2}} fullWidth variant="contained" onClick={onSubmit}>ADD</Button>
            </Box>
    </Grid>
  )
}
