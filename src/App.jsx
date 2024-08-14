import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import './App.css'
import CartDetails from './pages/CartDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartDetails />} />
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
