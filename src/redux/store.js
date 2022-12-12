import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productSlice'
import thunk from 'redux-thunk'
const store = configureStore({
   reducer: {
      user: userReducer,
      products: productReducer
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         thunk: {
         }
      })
})
export default store