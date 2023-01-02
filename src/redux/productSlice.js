import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0
const totalQuantity = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0
const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem('cartItems', JSON.stringify(item))
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity))
    localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
}
const initialState = {
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
    cartItems: items,
    orderBill: 0,
    orderDetails: [],
    productId: ""
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity += 1;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    imageURL: newItem.imageURL,
                    price: newItem.price,
                    quantity: 1,
                    description: newItem.description,
                    auther: newItem.auther,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity += 1
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.map((item) => Number(item.price) * Number(item.quantity))
            setItemFunc(state.cartItems.map(item => item),
                state.totalAmount, state.totalQuantity)
        },
        decrement: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id)

            if (existingItem.quantity > 0) {
                existingItem.quantity -= 1
                state.totalQuantity = state.totalQuantity -= 1
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                state.totalAmount = state.cartItems.map((item) => Number(item.price) * Number(item.quantity))
            } if (existingItem.quantity === 0) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
                toast.warning('Item removed from cart')
                state.totalAmount = state.cartItems.map((item) => Number(item.price) * Number(item.quantity))
                state.totalAmount = state.cartItems.map((item) => Number(item.price) * Number(item.quantity))
                setItemFunc(state.cartItems.map(item => item),
                    state.totalAmount, state.totalQuantity)
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload.id
            const existingItem = state.cartItems.find((item) => item.id === id)
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.map((item) => Number(item.price) * Number(item.quantity))
            state.totalAmount = state.cartItems.map((item) => Number(item.price) * Number(item.quantity))
            setItemFunc(state.cartItems.map(item => item),
                state.totalAmount, state.totalQuantity)
        },
        orderBill: (state, action) => {
            state.orderBill = action.payload
        },
        placeOrder: (state, action) => {
            const data = action.payload
            if (state.cartItems.quantity !== 0) {

                state.orderDetails.push({
                    name: data.name,
                    email: data.email,
                    number: data.number,
                    state: data.state,
                    landMark: data.landMark,
                    address: data.address,
                    pincode: data.pinCode,
                    proId: state.cartItems.map((item) => (
                        item.id
                    ))
                })
                console.log(state.orderDetails);
            }

        },
        showDetails: (state, action) => {
            state.productId = action.payload.id
        }
    }
})
export const { increment, decrement, showDetails, removeFromCart, orderBill, placeOrder } = productSlice.actions;
export default productSlice.reducer