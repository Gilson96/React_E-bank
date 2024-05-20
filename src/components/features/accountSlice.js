import { createSlice } from '@reduxjs/toolkit'
import data from '../data'

export const accountSlice = createSlice({
    name: 'account',
    initialState: [
        ...data,

    ],
    reducers: {
        createAccount(state, action) {
            state.push(action.payload)
        },
        deleteAccount(state, action) {
            const { someId } = action.payload;
            const removeId = state.findIndex(account => account.id === someId)
            console.log(removeId)
            removeId > -1 && state.splice(removeId, 1)
            
        },
        updateAccount(state, action) {
            const {
                someId,
                FirstName,
                LastName,
                Balance,
                Type,
                Email,
                Password
            } = action.payload;

            state.find(account => account.id === someId).firstName = FirstName
            state.find(account => account.id === someId).lastName = LastName
            state.find(account => account.id === someId).balance = Balance
            state.find(account => account.id === someId).type = Type
            state.find(account => account.id === someId).email = Email
            state.find(account => account.id === someId).password = Password
        },
        updateBalance(state, action) {
            const { someId, someValue } = action.payload;
            state.find(account => account.id === someId).balance = someValue
        }

    }
})

export const accountActions = accountSlice.actions

export const selectCreated = state => state.account;

export default accountSlice.reducer