import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

export const AccountSelect = ({value, onChange}) => {
    const [account, setAccount] = React.useState('')

    const handleChange = (event) => {
        setAccount(event.target.value);
        onChange(event.target.value);
    }
    return (
        <FormControl fullWidth sx={{ m: 2}}>
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
        </FormControl>
    )
}
