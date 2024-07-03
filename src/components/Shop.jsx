import React ,{useEffect} from "react";
import { useCart } from "../context/CartContext";
export default function Shop(){

    const { cartNumber } = useCart()
    const { setcartNumber } = useCart()
    const { cartItems } = useCart()
    const { setcartItems } = useCart()
        
    const {price} = useCart()
    const {setPrice} = useCart()


    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top on route change
      }, []);

    const data = [
        {
            id: 1,
            imageSeason: 'https://i.postimg.cc/wjbWV9dk/shop1-shoe-8.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 7000.00
        },

        {
            id: 2,
            imageSeason: 'https://i.postimg.cc/hGz2ZNDR/shop1-shoe-9.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 8000.00
        },
        {
            id: 3,
            imageSeason: 'https://i.postimg.cc/28G914cM/shop1-shoe-7.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 9000.00
        },
        {
            id: 4,
            imageSeason: 'https://i.postimg.cc/y8NQck2d/shop1-shoe-6.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 12000.00
        },
        {
            id: 5,
            imageSeason: 'https://i.postimg.cc/c4051Dmf/shop1-shoe-5.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 16000.00
        },
        {
            id: 6,
            imageSeason: 'https://i.postimg.cc/JnXd0vv5/shop1-shoe-4.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 28000.00
        },
        {
            id: 7,
            imageSeason: 'https://i.postimg.cc/nVvPJ8vH/shop1-shoe-3.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 30000.00
        },
        {
            id: 8,
            imageSeason: 'https://i.postimg.cc/qqXbXnkt/shop1-shoe-2.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 31000.00
        },
        {
            id: 9,
            imageSeason: 'https://i.postimg.cc/PrX2nCX4/shop1-shoe-15.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 38000.00
        },
        {
            id: 10,
            imageSeason: 'https://i.postimg.cc/HW4BNwgn/shop1-shoe-14.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        },
        {
            id: 11,
            imageSeason: 'https://i.postimg.cc/ZncHyScp/shop1-shoe-13.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        },
        {
            id: 12,
            imageSeason: 'https://i.postimg.cc/0jxZQQp9/shop1-shoe-12.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        },
        {
            id: 13,
            imageSeason: 'https://i.postimg.cc/508nbvQP/shop1-shoe-11.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        },
        {
            id: 14,
            imageSeason: 'https://i.postimg.cc/YS5b580G/shop1-shoe-10.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        },
     
        {
            id: 14,
            imageSeason: 'https://i.postimg.cc/sxRHhKRd/shop1-shoe-1.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
            price: 43000.00
        },
    ]

    const handleClick = (event)=>{

        let cartobj = {}
        for(let i = 0; i<10 ; i++){
            if(event.target.id == data[i].id){
                cartobj = data[i]
                setPrice((prev)=>prev+=cartobj.price)
                
                
            }
        }
    
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
                    <button  id={curElem.id} 
                    onClick={handleClick}
                     className="Card-btn">Add to Cart</button>
                </div>

            </>
        )
    })



    return(
        <>
        <div className="shop-heading">Exclusive Collection</div>
        
        <div className="shop-cart">
            {NewCollection}
        </div>
        
        </>
    )
}