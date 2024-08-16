import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productsReducer from "./store/product.js"
import themeReducer from "./store/theme.js"
import filterReducer from "./store/filter.js"
import cartReducer from "./store/cart.js"

const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
    filter: filterReducer,
    cart: cartReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
