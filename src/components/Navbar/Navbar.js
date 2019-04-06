import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Navbar.scss'

const Navbar = (props) => {
    const { pathname } = props.location;
    //this tests if the path in the url is exactly one of the following '/Home' or '/'
    let testHome = /^(\/Home)|(\/$)/.test(pathname);
    return (
        props.location.pathname !== '/blank' &&
        <nav id='nav-parent-comp'>
            <div>
                <ul>
                    <li className={testHome ? 'selected' : null}><Link to='/Home'>Home</Link></li>
                    <li className={props.location.pathname === '/About-Me' ? 'selected' : null}><Link to='/About-Me'>About Me</Link></li>
                    <li className={props.location.pathname === '/Skills' ? 'selected' : null}><Link to='/Skills'>Skills</Link></li>
                    <li className={props.location.pathname === '/Projects' ? 'selected' : null}><Link to='/Projects'>Projects</Link></li>
                    <li className={props.location.pathname === '/Contact-Me' ? 'selected' : null}><Link to='/Contact-Me'>Contact Me</Link></li>
                </ul>
                <h1>Nick McQueen</h1>
            </div>
            <div className='nav-menu'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </nav >
    )
}

export default withRouter(Navbar)