import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <div className="keira_menu">
                    <ul>
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>About Us</Link></li>
                        <li><Link to=''>Service</Link></li>
                        <li><Link to=''>Product</Link></li>
                        <li><Link to=''>Resume</Link></li>
                        <li><Link to=''>Blog</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
