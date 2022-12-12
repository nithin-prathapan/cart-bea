import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCont: 0
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state) => {
            state.cartCont += 1;
        },
        decrement: (state) => {
            state.cartCont -= 1;

        }
    }
})
export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer