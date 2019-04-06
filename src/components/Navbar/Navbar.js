import React, { createRef } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Navbar.scss'

const Navbar = (props) => {
    const navMenu = createRef()
    const slideMenu = createRef()
    const list = createRef()
    const { pathname } = props.location;
    //this tests if the path in the url is exactly one of the following '/Home' or '/'
    let testHome = /^(\/Home)|(\/$)/.test(pathname);
    return (
        props.location.pathname !== '/blank' &&
        <nav id='nav-parent-comp'>
            <div className='large-navigation'>
                <ul>
                    <li className={testHome ? 'selected' : null}><Link to='/Home'>Home</Link></li>
                    <li className={props.location.pathname === '/About-Me' ? 'selected' : null}><Link to='/About-Me'>About Me</Link></li>
                    <li className={props.location.pathname === '/Skills' ? 'selected' : null}><Link to='/Skills'>Skills</Link></li>
                    <li className={props.location.pathname === '/Projects' ? 'selected' : null}><Link to='/Projects'>Projects</Link></li>
                    <li className={props.location.pathname === '/Contact-Me' ? 'selected' : null}><Link to='/Contact-Me'>Contact Me</Link></li>
                </ul>
                <h1>Nick McQueen</h1>
            </div>
            <div ref={navMenu} className='nav-menu' onClick={() => handleMenuClick(navMenu, slideMenu, list)}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div ref={slideMenu} className='none'>
                <ol ref={list}>
                    <li className={testHome ? 'selected' : null}><Link to='/Home'>Home</Link></li>
                    <li className={props.location.pathname === '/About-Me' ? 'selected' : null}><Link to='/About-Me'>About Me</Link></li>
                    <li className={props.location.pathname === '/Skills' ? 'selected' : null}><Link to='/Skills'>Skills</Link></li>
                    <li className={props.location.pathname === '/Projects' ? 'selected' : null}><Link to='/Projects'>Projects</Link></li>
                    <li className={props.location.pathname === '/Contact-Me' ? 'selected' : null}><Link to='/Contact-Me'>Contact Me</Link></li>
                </ol>
            </div>
        </nav >
    )
}

function handleMenuClick(navMenu, slideMenu, list) {
    const nav = navMenu.current.classList
    const slide = slideMenu.current.classList

    nav.add('none')
    slide.remove('none')
    list.current.scrollLeft += 100

    for (let i = 0; i < 200; i++) {
        if (i < 50) {
            setTimeout(function () {list.current.scrollLeft += 1}, i*6)
        } else if (i < 150) {
            setTimeout(function () {list.current.scrollLeft -= 1}, i*6)
        } else {
            setTimeout(function () {list.current.scrollLeft += 1}, i*6)
        }
    }
}

export default withRouter(Navbar)