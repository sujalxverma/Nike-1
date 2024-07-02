import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/Topbar";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer01 from "./components/Footer01";






export default function Layout(){
    
   
    const [cartNumber,setcartNumber] = useState(0)
    
    const [cartItems,setcartItems] = useState(
       [
        // {
        //     id: 2,
        //     imageSeason: '../src/images/season-2.png',
        //     titleText: 'Nike Reax * TR',
        //     greyText: 'Men\'s Workout Shoes',
        //     price: 8000.00
        // },
       ]
    )


    return(

        <CartProvider value={{cartNumber,setcartNumber,cartItems,setcartItems}}>
            <TopBar />
            <Navbar />
            <Outlet />
            <Footer01 />
        </CartProvider>
    )
}