import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        summary: {
            subTotal: 0,
            tax: 0,
            total: 0
        },
        products: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        setSummary: (state, action) => {
            state.summary = action.payload
        },
        removeProduct: (state, action) => {
            const { productId } = action.payload
            const updatedProducts = state.products.filter(product => product !== productId)
            state.products = updatedProducts
        }
    }
})

export const { addToCart, setSummary, removeProduct } = cartSlice.actions
export default cartSlice.reducer