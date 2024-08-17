import { createSlice } from "@reduxjs/toolkit";

function getLocalStorageTheme() {
    let storageStatus = localStorage.getItem("shopTheme")
    if (storageStatus) {
        return JSON.parse(storageStatus)
    }
    return null
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: getLocalStorageTheme() ?? "light"
    },
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload
            const storageReady = JSON.stringify(state.value)
            localStorage.setItem("shopTheme", storageReady)
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer