import React from "react";

export default function Member(){

    const data = [
        {
            id: 1,
            imageSeason: 'https://i.postimg.cc/g0FtsCkX/member-1.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Your Exclusive Access',
            price: 'Shop'
        },

        {
            id: 2,
            imageSeason: 'https://i.postimg.cc/rmqnX54q/member-2.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Your Exclusive Access',
            price: 'Customise'
        },
        {
            id: 3,
            imageSeason: 'https://i.postimg.cc/gJ4MYry8/member-3.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Your Exclusive Access',
            price: 'Celebrate'
        },
        {
            id: 4,
            imageSeason: 'https://i.postimg.cc/HLwZh6VS/member-4.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Your Exclusive Access',
            price: 'Learn More'
        },
        {
            id: 5,
            imageSeason: 'https://i.postimg.cc/gjJgrd45/member-5.webp',
            titleText: 'Nike Reax * TR',
            greyText: 'Your Exclusive Access',
            price: 'Explore'
        }       
    ]

    const NewCollection = data.map((curElem) => {
        return (
            <>
               
                <div className="eachCard">
                <div className="mem-txt-1">{curElem.titleText}</div>
                    <div className="mem-txt-2">{curElem.greyText}</div>
                    <div className="mem-txt-3"><button className="mem-btn">{curElem.price}</button></div>
                    <img src={curElem.imageSeason} alt="" />
                   
                </div>


                {/* <div className="Cards">
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
                </div> */}

            </>
        )
    })


return(
    <>
    <div className="seasonHeading">Member Benefits</div>
    <div className="Member-box">
        {NewCollection}
    </div>

    </>
)

}