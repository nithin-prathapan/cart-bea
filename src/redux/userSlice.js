import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: "",
    email: "",
    isLoggedIn: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.isLoggedIn = true;

        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.name = null;
            state.email = null;
        }
    }
})

export const { userLogin,logOut } = userSlice.actions;
export default userSlice.reducer