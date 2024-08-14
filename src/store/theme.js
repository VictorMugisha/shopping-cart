import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light"
    },
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer