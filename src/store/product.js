import { createSlice } from "@reduxjs/toolkit";

function getLocalStorageProducts() {
    let storageStatus = localStorage.getItem("shopProducts")
    if (storageStatus) {
        return JSON.parse(storageStatus)
    }
    return null
}

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: getLocalStorageProducts() ?? [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.value = [...state.value, action.payload]
            const storageReady = JSON.stringify(state.value)
            localStorage.setItem("shopProducts", storageReady)
        },
        updateProduct: (state, action) => {
            const newProducts = state.value.map(product => {
                if (product.productId === action.payload.productId) {
                    return action.payload
                } else return product
            })
            state.value = newProducts
            const storageReady = JSON.stringify(state.value)
            localStorage.setItem("shopProducts", storageReady)
        }
    }
})

export const { addProduct, updateProduct } = productsSlice.actions
export default productsSlice.reducer