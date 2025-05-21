import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-container">
            <div className="left-container">
                <img src="/images/sidebarimage.jpg" alt="" />
            </div>
            <div className="right-container">
                <div className="form-container">
                    <div className="form-content">
                        <h2>Log in to Exclusive</h2>
                        <p>Enter your details below</p>
                    </div>
                    <div className="input-fields">
                        <input type="text" name="email" placeholder='Email or Phone Number' />
                        <input type="password" name="name" placeholder='Password' />
                    </div>
                    <div className="buttons">
                        <button type='submit' className='btn-submit'>Log in</button>
                        <button type='submit' className='btn-img'>
                            Forget Password?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
