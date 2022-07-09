import React from 'react'
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const IncomeExpenseSwitch = () => {
  return (
    <div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Income</Typography>
          <Switch defaultChecked inputProps={{ 'aria-label': 'Switch demo' }} />
        <Typography>Expense</Typography>
      </Stack>
    </div>
  )
}
