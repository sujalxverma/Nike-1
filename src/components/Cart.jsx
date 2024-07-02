import React, { useCallback, useEffect } from "react";
import { useCart } from "../context/CartContext";


export default function Cart() {

    const { cartNumber } = useCart()
    const { cartItems } = useCart()
    const { setcartItems } = useCart()

    // const myCart = JSON.parse(localStorage.getItem("NikeCart"))

    const show = () => {
        for (let item of cartItems) {
            console.log(item)
        }
    }

  
  
    // useEffect(() => {
    //     let uniqueArray = [...new Set(cartItems)];
    //     setcartItems(uniqueArray)
    // }, [cartItems])
 

    const NikeCart = cartItems.map((curElem) => {
        return (
            <>
                <div className="cart-item">
                    <div className="cart-item-img">
                        <img src={curElem.imageSeason} alt="" />
                    </div>
                    <div className="cart-data">
                        <div className="Card-txt">
                            <div c-txt-1>
                                {curElem.titleText}
                            </div>
                            <div c-txt-2>
                                {curElem.greyText}
                            </div>
                            <div c-txt-3>
                                MRP : Rs. {curElem.price}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })









    return (

        <>

            <button onClick={show} >CLick</button>
            <div className="myCart">

                {NikeCart}
            </div>

        </>
    )
}

