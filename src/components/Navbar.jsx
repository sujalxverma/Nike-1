import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {


    return (
        <>
            <nav className="navbar">
                <div className="nike-img">
                    <NavLink to="/"><img className="nike-img" src="../src/images/nike-logo.png" alt="" /></NavLink>
                </div>
                <div className="nav-links">
                    <ul className="nav-links-list">
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>SNKRS</li>
                    </ul>
                </div>
                <div className="cart-tag">
                <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                
                <NavLink to="/cart"><i class="fa-solid fa-heart"></i></NavLink>
                </div>
            </nav>

        </>
    )
}