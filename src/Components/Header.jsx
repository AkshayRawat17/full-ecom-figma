import React from 'react'
import "../App.css"

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-heading">
                    <p>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%! <span className='span-class'>ShopNow</span> </p>
                </div>
                <div className="header-language">
                    <select name="language" id="language">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </div>
        </>
    )
}
