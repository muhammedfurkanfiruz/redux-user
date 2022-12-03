import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/usersSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})