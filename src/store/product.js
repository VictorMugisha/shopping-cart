import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer