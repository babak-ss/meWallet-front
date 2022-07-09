import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const AccountSelect = () => {
    const [account, setAccount] = React.useState('')

    const handleChange = (event) => {
        setAccount(event.target.value);
    }
  return (
    <div>
        <InputLabel id="account-select-label">Account</InputLabel>
        <Select
            labelId="account-select-label"
            id="account-select"
            value={account}
            label="Account"
            onChange={handleChange}
        >
            <MenuItem value={"Melli"}>Melli</MenuItem>
            <MenuItem value={"Pasargad"}>Pasargad</MenuItem>
            <MenuItem value={"Sepah"}>Sepah</MenuItem>
        </Select>  
    </div>
  )
}
