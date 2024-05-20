import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './components/features/accountSlice'

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});



