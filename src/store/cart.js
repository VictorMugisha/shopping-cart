import { createSlice } from "@reduxjs/toolkit";

function getLocalStorageCartProducts() {
    let storageStatus = localStorage.getItem("shopCartProducts")
    if (storageStatus) {
        return JSON.parse(storageStatus)
    }
    return null
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: getLocalStorageCartProducts() ?? []
    },
    reducers: {
        addToCart: (state, action) => {
            state.products = [...state.products, action.payload]
            const storageReady = JSON.stringify(state.products)
            localStorage.setItem("shopCartProducts", storageReady)
        },
        removeProduct: (state, action) => {
            const { productId } = action.payload
            const updatedProducts = state.products.filter(product => product !== productId)
            state.products = updatedProducts
            const storageReady = JSON.stringify(state.products)
            localStorage.setItem("shopCartProducts", storageReady)
        }
    }
})

export const { addToCart, removeProduct } = cartSlice.actions
export default cartSlice.reducer