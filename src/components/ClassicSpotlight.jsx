import React from "react";
import { NavLink } from "react-router-dom";

export default function ClassicSpotlight(){

    return(
            <>
            <div className="cspot">Classic Spotlight</div>
            <div className="spotlight">
                <NavLink to="/Nike-1/shop">
                <div className="spot-part"><img src="https://i.postimg.cc/cHDK1Nvr/shoe-1.webp" alt="" /></div>
                </NavLink>
                <NavLink to="/Nike-1/shop">
                <div className="spot-part"><img src="https://i.postimg.cc/gjX0YL9T/shoe-2.webp" alt="" /></div></NavLink>
                <NavLink to="/Nike-1/shop">
                <div className="spot-part"><img src="https://i.postimg.cc/KvTYwTDK/shoe-4.webp" alt="" /></div></NavLink>
                <NavLink to="/Nike-1/shop">
                <div className="spot-part"><img src="https://i.postimg.cc/wjdBpBww/shoe-3.webp" alt="" /></div></NavLink>
              
               
               
            </div>
            </>
    )
}