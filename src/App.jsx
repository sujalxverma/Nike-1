import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='signin' element={<SignIn />} />
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />


      </Route>
    )
  )




  return (

    <RouterProvider router={router} />


  )
}

export default App
