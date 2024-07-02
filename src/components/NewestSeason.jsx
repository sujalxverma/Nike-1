import React from "react";
import { CartProvider, useCart } from "../context/CartContext";
import { useRef,useEffect } from "react";

export default function NewestSeason() {

    const { cartNumber } = useCart()
    const { setcartNumber } = useCart()
    const { cartItems } = useCart()
    const { setcartItems } = useCart()

    const data = [
        {
            id: 1,
            imageSeason: '../src/images/season-1.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 7000.00
        },

        {
            id: 2,
            imageSeason: '../src/images/season-2.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 8000.00
        },
        {
            id: 3,
            imageSeason: '../src/images/season-3.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 9000.00
        },
        {
            id: 4,
            imageSeason: '../src/images/season-4.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 12000.00
        },
        {
            id: 5,
            imageSeason: '../src/images/season-5.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 16000.00
        },
        {
            id: 6,
            imageSeason: '../src/images/season-6.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 28000.00
        },
        {
            id: 7,
            imageSeason: '../src/images/season-7.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 30000.00
        },
        {
            id: 8,
            imageSeason: '../src/images/season-8.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 31000.00
        },
        {
            id: 9,
            imageSeason: '../src/images/season-9.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 38000.00
        },
        {
            id: 10,
            imageSeason: '../src/images/season-10.png',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        }
    ]

const handleClick = (event)=>{

    let cartobj = {}
    for(let i = 0; i<10 ; i++){
        if(event.target.id == data[i].id){
            cartobj = data[i]
        }
    }
    // console.log(cartobj)
    function update(cartobj){
        setcartItems((prev)=>[...prev,cartobj])
    }

   
update(cartobj)
    
    console.log(cartItems)
    
}






    const NewCollection = data.map((curElem) => {
        return (
            <>
               
                <div className="Cards">
                    <div className="card-img">
                        <img src={curElem.imageSeason} alt="" />
                    </div>
                    <div className="Card-txt">
                        <div className="c-txt-1">
                            {curElem.titleText}
                        </div>
                        <div className="c-txt-2">
                            {curElem.greyText}
                        </div>
                        <div className="c-txt-3">
                            MRP : Rs. {curElem.price}
                        </div>
                    </div>
                    <button  id={curElem.id} onClick={handleClick} className="Card-btn">Add to Cart</button>
                </div>

            </>
        )
    })


    return (
        <>
         <div className="seasonHeading">Newest of the Season</div>
            <div className="Card-box">
                {NewCollection}
            </div>

        </>
    )
}