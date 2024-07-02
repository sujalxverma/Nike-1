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
      <Route path='/Nike-1/' element={<Layout />}>
        <Route path='/Nike-1/signin' element={<SignIn />} />
        <Route path='/Nike-1/' element={<Home />} />
        <Route path='/Nike-1/cart' element={<Cart />} />


      </Route>
    )
  )




  return (

    <RouterProvider router={router} />


  )
}

export default App
