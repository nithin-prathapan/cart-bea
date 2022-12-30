import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalQuantity: 0,
    totalAmount: "",
    cartItems: [],
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
            console.log(state.totalQuantity);
            console.log(state.cartItems);
        },
        decrement: (state, action) => {
            if (state.cartItems.id) {

            }
        }

    }
})
export const { increment } = productSlice.actions;
export default productSlice.reducer