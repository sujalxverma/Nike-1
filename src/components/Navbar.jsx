import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
// import { useCart } from "../context/CartContext";
export default function Navbar() {

    const { cartNumber, setcartNumber } = useCart()


    return (
        <>
            <nav className="navbar">
                <div className="nike-img">
                    <NavLink to="/Nike-1/"><img className="nike-img" src="https://i.postimg.cc/FKTF3VN6/nike-logo.png" alt="" /></NavLink>
                </div>
                <div className="nav-links">
                    <ul className="nav-links-list">
                        {/* <li>New & Featured</li> */}
                        <NavLink to="/Nike-1/shop"> <li>New & Featured</li></NavLink>
                        <NavLink to="/Nike-1/about"> <li>About</li></NavLink>
                        {/* <li>Women</li> */}
                        {/* <li>SNKRS</li> */}
                    </ul>
                </div>
                <div className="cart-tag">
                    <NavLink to="/Nike-1/cart"><i className="cart-symbol fa-solid fa-cart-shopping"></i>
                        <span className="cart-Number">{cartNumber}</span>
                    </NavLink>

                    {/* <NavLink to="/Nike-1/cart"><i class="fa-solid fa-heart"></i></NavLink> */}
                </div>
            </nav>

        </>
    )
}