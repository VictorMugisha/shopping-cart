import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
