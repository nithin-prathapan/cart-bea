import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productSlice'
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