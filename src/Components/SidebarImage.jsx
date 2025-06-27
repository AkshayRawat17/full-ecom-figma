import React from 'react'

export default function SidebarImage() {
    return (
        <>
            <div className="sidebar-image">
                <ul className="sidebar">
                    <li className='list-item'>Women's Fashion<span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span></li>
                    <li className='list-item'>Men's Fashion <span className="material-symbols-outlined">
                        arrow_forward_ios</span></li>
                    <li className='list-item'>Electronics</li>
                    <li className='list-item'>Home & Lifestyle</li>
                    <li className='list-item'>Medicine</li>
                    <li className='list-item'>Sports & Outdoor</li>
                    <li className='list-item'>Baby's & Toys</li>
                    <li className='list-item'>Groceries & Pets</li>
                    <li className='list-item'>Health & Beauty</li>
                </ul>
                <div className="image">
                    <img src="/images/sidebarimage.jpg" height={320} alt="" />
                </div>
            </div>
        </>
    )
}
