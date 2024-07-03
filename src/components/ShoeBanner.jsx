import React from "react";

export default function ShoeBanner(){
    return(
        <>
            <div className="for-banner">
                <div className="shoe-ban-img">
                    {/* <img src="https://i.postimg.cc/CLbFmgwk/shoe-banner.webp" alt="" /> */}
                    <img src="src/images/shoe-banner.png" alt="" />
                    {/* <iframe  width="1350" height="315" src="https://www.youtube.com/embed/G02E6LaZLYU?si=m1lJ7st2JHUYME5F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                 
                </div>
                <div className="banner-txt">
                    <div className="txt-1">Nike Pegasus 41</div>
                    <div className="txt-2">DON'T WASTE YOUR ENERGY</div>
                    <div className="txt-3">Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new React X foam.</div>
                    <div ><button className="shoe-ban-btn">Shop</button></div>
                </div>
            </div>
        </>
    )
}