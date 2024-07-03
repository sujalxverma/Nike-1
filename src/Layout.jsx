import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/Topbar";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer01 from "./components/Footer01";






export default function Layout(){
    
   
    const [cartNumber,setcartNumber] = useState(0)
    
    const [cartItems,setcartItems] = useState(
       []
    )

    const [price,setPrice] = useState(0)


    
    return(

        <CartProvider value={{cartNumber,setcartNumber,cartItems,setcartItems,price,setPrice}}>
            <TopBar />
            <Navbar />
            <Outlet />
            <Footer01 />
        </CartProvider>
    )
}