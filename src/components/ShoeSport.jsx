import React from "react";

export default function ShoeSport(){

    const data = [
        {
            id: 1,
            imageSeason: 'https://i.postimg.cc/kMQJyCJ8/sport-1.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
           
        },

        {
            id: 2,
            imageSeason: 'https://i.postimg.cc/br9qYxCL/sport-2.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
         
        },
        {
            id: 3,
            imageSeason: 'https://i.postimg.cc/NFcgwJ45/sport-3.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
           
        },
        {
            id: 4,
            imageSeason: 'https://i.postimg.cc/tC9XScJc/sport-4.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
         
        },
        {
            id: 5,
            imageSeason: 'https://i.postimg.cc/Hs3Tft7k/sport-5.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
          
        },
        {
            id: 6,
            imageSeason: 'https://i.postimg.cc/HkhdLszG/sport-6.jpg',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
         
        },
        {
            id: 7,
            imageSeason: 'https://i.postimg.cc/XYJn3ywc/sport-7.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Men\'s Workout Shoes',
           
        }]


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
                                Shop
                            </div>
                        </div>
                       
                    </div>
    
                </>
            )
        })
    


    
    return(
        <>
        <div className="seasonHeading">Shop by Sport</div>
            <div className="Shoe-box">
                {NewCollection}
            </div>
        </>
    )
}