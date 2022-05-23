import { configureStore } from '@reduxjs/toolkit'
import  useReducer from "./userslice"

export const store = configureStore({
  reducer: {
     user:useReducer,
  },
})


