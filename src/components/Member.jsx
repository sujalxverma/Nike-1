import React from "react";
import { NavLink } from "react-router-dom";
export default function Member() {

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
                    <div className="mem-txt-3">
                        <NavLink to="/Nike-1/shop">
                            <button className="mem-btn">{curElem.price}</button></NavLink>

                    </div>
                    <img  src={curElem.imageSeason} alt="" />

                </div>

                {/* <NavLink to="/Nike-1/shop"></NavLink> */}



            </>
        )
    })


    return (
        <>
            <div className="seasonHeading">Member Benefits</div>
            <div className="Member-box">
                {NewCollection}
            </div>

        </>
    )

}