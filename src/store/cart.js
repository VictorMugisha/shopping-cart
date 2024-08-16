import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        updateCartItem: (state, action) => {
            const newCartItems = state.value.map(item => {

            })
            state.value = newCartItems
        },
        deleteCartItem: (state, action) => {
            const newCartItems = state.value.filter(item => item.itemId !== action.payload)
            state.value = newCartItems
        }
    }
})

export const { addToCart, deleteCartItem, updateCartItem } = cartSlice.actions
export default cartSlice.reducer