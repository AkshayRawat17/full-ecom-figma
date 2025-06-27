import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div className="signup-container">
                <div className="left-container">
                    <img src="/images/sidebarimage.jpg" alt="" />
                </div>
                <div className="right-container">
                    <div className="form-container">
                        <div className="form-content">
                            <h2>Create an account</h2>
                            <p>Enter your details below</p>
                        </div>
                        <div className="input-fields">
                            <input type="text" name="name" placeholder='Name' />
                            <input type="text" name="email" placeholder='Email or Phone Number' />
                            <input type="password" name="name" placeholder='Password' />
                        </div>
                        <div className="buttons">
                            <button type='submit' className='btn-submit'>Create Account</button>
                            <button type='submit' className='btn-img'>
                                <img src="/images/google.png" alt="" />
                                <p>Sign up with Google</p>
                            </button>
                        </div>
                        <div className="login">
                            <div className="login-content">Already have account?</div>
                            <div className="login-para"><NavLink to="/login">Log in</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
