



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Register from "./components/Register"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/header",
      element: <Header/>,
    }
  ])

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App