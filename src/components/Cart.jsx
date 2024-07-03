import React, { useCallback, useEffect } from "react";
import { CartProvider, useCart } from "../context/CartContext";


export default function Cart() {

    const { cartNumber } = useCart()
    const { cartItems } = useCart()
    const { setcartItems } = useCart()
    const { setcartNumber } = useCart()

    const { price } = useCart()
    let myList = []
    
    localStorage.setItem("NikeCart", JSON.stringify(cartItems))
    myList = Array.from(JSON.parse(localStorage.getItem("NikeCart")))

    const handleClick = (e) => {
        setcartNumber((prev) => prev - 1)

        let cartObj = {}
        console.log(e.target.id)
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id == e.target.id) {
                cartObj = cartItems[i]
                break
            }
        }

        console.log(cartObj)
       


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
                        <button className="check-btn">
                            Checkcout
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}

