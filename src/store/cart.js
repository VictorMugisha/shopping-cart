import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        summary: {
            subTotal: '',
            withholdingTax: 0,
            total: 0
        },
        products: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.products = [...state.products, action.payload]
        },
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer