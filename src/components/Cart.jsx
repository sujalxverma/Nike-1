import React, { useCallback, useEffect, useState } from "react";
import { CartProvider, useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";


export default function Cart() {

    const { cartNumber } = useCart()
    const { cartItems } = useCart()
    const { setcartItems } = useCart()
    const { setcartNumber } = useCart()
    const {checkedOut} = useCart()
    const {setcheckedOut} = useCart()

    const { price } = useCart()
    const { setPrice } = useCart()
    let myList = []

    localStorage.setItem("NikeCart", JSON.stringify(cartItems))
    myList = Array.from(JSON.parse(localStorage.getItem("NikeCart")))


    const checkBag = ()=>{
            console.log(checkedOut)
            setcheckedOut((prev) => !prev)
    }

    const handleClick = (e) => {

        setcartNumber((prev) => prev - 1)

        let cartObj = {}
        console.log(e.target.id)
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id == e.target.id) {
                cartObj = cartItems[i]
                setPrice((prev) => prev -= cartObj.price)
                break
            }
        }

        console.log(cartObj)

        myList = myList.filter((curelem) => {
            return (curelem.id != cartObj.id)

        })

        setcartItems(myList)

        localStorage.setItem("NikeCart", JSON.stringify(cartItems))
        console.log(myList)

    }

    const NikeCart = myList.map((curElem) => {

        return (
            <>
                <div className="cart-item">
                    <div className="cart-item-img">
                        <div className="cart-images">
                            <img src={curElem.imageSeason} alt="" />
                        </div>
                        <div className="Card-txt">
                            <div className="c-txt-01">
                                {curElem.titleText}
                            </div>
                            <div className="c-txt-02">
                                {curElem.greyText}
                            </div>
                            <div >
                                <button id={curElem.id} onClick={handleClick} >
                                    <i class="fa-solid fa-trash"></i>.
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-price">MRP : Rs. {curElem.price}</div>

                </div>
            </>
        )
    })



    return (

        <>

            {/* <button onClick={show} >CLick</button> */}

            <div className="myCart">

                <div className="nike-cart-div">
                    <div className="bag">Bag</div>
                    {NikeCart}
                </div>


                <div className="summary">
                    <div className="summ-head">Summary</div>
                    <div className="sub-div">
                        <div className="total">Subtotal</div>
                        <div className="sum-price">Rs. {price}</div>
                    </div>
                    <div className="sub-div-2">
                        <div className="total">Taxes and more</div>
                        <div className="sum-price">Rs. 1390</div>
                    </div>
                    <div className="total-price">
                        <div className="total-tag">Total</div>
                        <div className="total-div"> Rs. {price + 1390} </div>
                    </div>

                    <div className="checkout-btn">
                    <NavLink to="/Nike-1/checkout"><button onClick={checkBag} className="check-btn">
                            Checkcout
                        </button></NavLink>
                       
                    </div>
                </div>

            </div>

        </>
    )
}

