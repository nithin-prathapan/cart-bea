import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    name: "",
    email: "",
    isLoggedIn: true,
    userImage: "",
    user: [{}]
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignIn: (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.isLoggedIn = true;
            state.userImage = action.payload.photoURL;
            state.user = action.payload
        },
        userLogin: (state, action) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.name = "";
            state.email = "";
            state.isLoggedIn = false;
            state.userImage = ""
        }
    }
})
export const { userLogin, logoutUser, userSignIn } = userSlice.actions;
export default userSlice.reducer;