import React from 'react'
import './Navbar.scss'
import {NavLink} from "react-router-dom";
function Navbar() {
    return (
        <div>
            <div className="sub-nav">
                <div className="sub-wrapper">
                    <ul>
                        <li><a href="#">Sarigianni Furs</a></li>
                        <li><a href="tel:+971.526.480.925">+971.526.480.925</a></li>
                        <li><a href="mailto:info@sarigianni.gr">info@sarigianni.gr</a></li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="instagram.com"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="twitter.com"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="pinterest.com"><i class="fab fa-pinterest"></i></a></li>
                        <li><a href="facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About Us</NavLink></li>
                    <li><NavLink activeClassName="active" to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/"><img src="https://sarigiannifur.com/wp-content/uploads/2018/11/sarigianni-logo-new-01.png"/></NavLink></li>
                    <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
                    <li><NavLink activeClassName="active" to="/store">Store Locator</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
