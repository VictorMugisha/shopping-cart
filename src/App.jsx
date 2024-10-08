import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import CartDetails from './pages/CartDetails'
import './App.css'
import NotFound from './components/NotFound'
import NewProduct from './pages/NewProduct'
import ProductDetail from './pages/ProductDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartDetails />} />
        <Route path="new-product" element={<NewProduct />} />
        <Route path="product-details" element={<ProductDetail />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
