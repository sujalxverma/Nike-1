import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function TopBar(){

    const{signin,setsignin} = useCart()

    return(
        <>
    <nav className="topbar-nav">
        <div>
      <NavLink to='/Nike-1/'> <img className="nike-logo"  src="https://th.bing.com/th/id/OIP.Jra3VBScWvk5t3IyESg6GQHaG6?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></NavLink>
        </div>
        <div className="top-div">
            <ul className="top-bar-list">
                <li className="top-list">Find a Store</li>
                <li className="top-list">Help</li>
                <li className="top-list"><NavLink to='/Nike-1/cart'>Cart</NavLink></li>
                <li className="top-list"><NavLink to='/Nike-1/signin'>{signin}</NavLink></li>
            </ul>
        </div>
    </nav>
        </>
    )
}