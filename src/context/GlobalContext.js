import React, { createContext, useReducer } from 'react'
import { Grid } from '@mui/material';

// Initial State
const initialState = {
    transactions: [
      { id: 1, date: new Date(2022,0,1), account: 'Sepah', text: 'Flower', amount: -20 },
      { id: 2, date: new Date(2022,0,1), account: 'Melli', text: 'Salary', amount: 300 },
      { id: 3, date: new Date(2022,0,1), account: 'Melli', text: 'Book', amount: -10 },
      { id: 4, date: new Date(2022,0,1), account: 'Melli', text: 'Camera', amount: 150 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    // function deleteTransaction(id) {
    //     dispatch({
    //         type: 'DELETE_TRANSACTION',
    //         payload: id
    //     });
    // }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions,
            // deleteTransaction,
            addTransaction
        }}>
            <Grid container xs={12} justifyContent="center">
                { children }
            </Grid>
        </GlobalContext.Provider>
    );
}

function AppReducer(state, action) {
    switch(action.type) {
        // case 'DELETE_TRANSACTION':
        //     return {
        //         ...state,
        //         transactions: state.transactions.filter((transaction => transaction.id != action.payload))
        //     }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
                    
            }
        default:
            return state;
    }
}
