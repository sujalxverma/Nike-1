import React from "react";
import { createContext,useContext } from "react";

export const cartContext = createContext()

export const useCart = ()=>{
       return useContext(cartContext)
}

export const CartProvider = cartContext.Provider