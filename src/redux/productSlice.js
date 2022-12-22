import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCont: 0,
    product_id: '',
    imageUrl: ''

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

        },
        productId: (state, action) => {
            state.product_id = action.payload

        },
        setPictureUrl: (state, action) => {
            state.imageUrl = action.payload
        }

    }
})
export const { increment, decrement, productId, setPictureUrl } = productSlice.actions;
export default productSlice.reducer