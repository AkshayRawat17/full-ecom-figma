import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navbar">

                <div className="navbar-heading">
                    <p>Exclusive</p>
                </div>

                {/* <Link to="/" className="home-link">Home</Link>
                    <Link to="/contact" className="contact-link">Contact</Link>
                    <Link to="/about" className="about-link">About</Link>
                    <Link to="/signup" className="signup-link">Signup</Link> */}
                <ul className='navbar-links'>
                    <li><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li><NavLink to="/contact" className="contact-link">Contact</NavLink></li>
                    <li><NavLink to="/about" className="about-link">About</NavLink></li>
                    <li><NavLink to="/signup" className="signup-link">Signup</NavLink></li>
                </ul>

                <div className="navbar-contents">
                    <div className="input-box">
                        <input type="search" placeholder='What are you looking for?' />
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <div className="wishlist">
                        <span className="material-symbols-outlined">favorite</span>
                    </div>
                    <div className="add-to-cart">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                </div>

            </div>
        </>
    )
}
