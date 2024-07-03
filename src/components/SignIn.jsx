import React from "react";
import { useCart } from "../context/CartContext";
import { useRef } from "react";


export default function SignIn(){
    const{signin,setsignin} = useCart()
    const signRef = useRef(null)
    const {signed,setsigned} = useCart()
    const handleClick = ()=>{
        console.log(signRef.current.value)
        setsignin(signRef.current.value)
        setsigned(true)
        // localStorage.setItem("signin",signin)
    }

   if(signed == false){
    return(
        <>
         <div className="checkout-box">
        <div className="check-title">Sign In</div>
        <div className="relative max-w-80 email-f">
        <input
            type="text"
            placeholder="Enter your email"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <div className="relative max-w-80 email-f">
        <input
            ref={signRef}
            type="text"
            placeholder="Enter your name"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
    </div>
    <button onClick={handleClick} className="check-btn">Confirm</button>
    </div>

        </>
    )
   }
   else{

    return(
        <>
         <div className="final-box">
                        <div className="thankyou">Hi '{signin}'</div>
                        <div className="nice">Have a nice shopping</div>
                       
                </div>
        </>
    )

   }
}