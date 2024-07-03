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
            imageSeason: 'https://i.postimg.cc/1RwhZrbZ/season-1.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 7000.00
        },

        {
            id: 2,
            imageSeason: 'https://i.postimg.cc/fbJpqcYp/season-2.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 8000.00
        },
        {
            id: 3,
            imageSeason: 'https://i.postimg.cc/VNpTxJR6/season-3.webpg',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 9000.00
        },
        {
            id: 4,
            imageSeason: 'https://i.postimg.cc/mD3wmkpK/season-5.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 12000.00
        },
        {
            id: 5,
            imageSeason: 'https://i.postimg.cc/d3q9pFz3/season-4.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 16000.00
        },
        {
            id: 6,
            imageSeason: 'https://i.postimg.cc/X7Y8gVfD/season-6.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 28000.00
        },
        {
            id: 7,
            imageSeason: 'https://i.postimg.cc/m2pSX0VZ/season-7.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 30000.00
        },
        {
            id: 8,
            imageSeason: 'https://i.postimg.cc/nhsG60w4/season-9.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 31000.00
        },
        {
            id: 9,
            imageSeason: 'https://i.postimg.cc/qv9x0y99/season-8.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 38000.00
        },
        {
            id: 10,
            imageSeason: 'https://i.postimg.cc/rpxCpzTz/season-10.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        }
    ]
    const {price} = useCart()
    const {setPrice} = useCart()

const handleClick = (event)=>{

    let cartobj = {}
    for(let i = 0; i<10 ; i++){
        if(event.target.id == data[i].id){
            cartobj = data[i]
            setPrice((prev)=>prev+=cartobj.price)
            
            
        }
    }
    // console.log(cartobj)
    function update(cartobj){
        setcartItems((prev)=>[...prev,cartobj])
       
        
    }

   
update(cartobj)
localStorage.setItem("NikeCart", JSON.stringify(cartItems))
    
  setcartNumber((prev)=>prev+1)
    
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