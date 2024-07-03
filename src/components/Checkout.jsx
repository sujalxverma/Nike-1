import React from "react";
import { useCart } from "../context/CartContext";
import { redirect } from "react-router-dom";



export default function Checkout(){
    const {checkedOut} = useCart()
    const {setcheckedOut} = useCart()
    const {setcartItems} = useCart()
    const {setPrice} = useCart()

    const handleClick = ()=>{
        setcheckedOut((prev)=> !prev)
        console.log(checkedOut)
        setcartItems((prev)=>[])
        setPrice(0)
        
    }

   if(checkedOut == false){
    return(
        <div className="checkout-box">
        <div className="check-title">Checkout</div>
        <div className="relative max-w-80 email-f">
        <input
            type="text"
            placeholder="Enter your email"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <div className="relative max-w-80 email-f">
        <input
            type="text"
            placeholder="Enter your name"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <button onClick={handleClick} className="check-btn">Confirm</button>
    </div>
    )
   }
   else{
    return(<>
                <div className="final-box">
                        <div className="thankyou">Thank You</div>
                </div>
    </>)
   }
}








 