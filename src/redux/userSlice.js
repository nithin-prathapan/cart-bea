import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
    },

    reducers: {
        userLogin: (state) => {
            state.isLoggedIn = true;
        }
    }
})

export const { userLogin } = userSlice.actions;
export default userSlice.reducer