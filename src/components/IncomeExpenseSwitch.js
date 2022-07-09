import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const IncomeExpenseSwitch = ({ value, onChange }) => {

  const [sign, setSign] = React.useState(false);
  
  const handleChange = (event) => {
    console.log("handleChange Switch:")
    console.log(event.target.checked);
    setSign(event.target.checked);
    onChange(event.target.checked);
  }

  return (
    <div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Expense</Typography>
          <Switch inputProps={{ 'aria-label': 'Switch demo' }} value={sign} onChange={handleChange}/>
        <Typography>Income</Typography>
      </Stack>
    </div>
  )
}
