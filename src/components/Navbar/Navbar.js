import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
    return (
        <nav id='nav-parent-comp'>
            <div>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/About-Me'>About Me</Link></li>
                    <li><Link to='/Skills'>Skills</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Contact-Me'>Contact Me</Link></li>
                </ul>
                <h1>Nick McQueen</h1>
            </div>
        </nav>
    )
}

export default Navbar