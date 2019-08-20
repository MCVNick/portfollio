import React from 'react'

import facebookIcon from './../../resources/Facebook.png'
import githubIcon from './../../resources/Github.png'
import linkedInIcon from './../../resources/LinkedIn.png'

import './Footer.scss'

const Footer = () => {
    return (
        <footer id="foot-parent-comp">
            <div>
                <p>©2019 by Nick McQueen</p>
                <a href='https://www.linkedin.com/in/n-mcqueen/' target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn"/></a>
                <a href='https://github.com/MCVNick' target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub"/></a>
                <a href='https://www.facebook.com/nick.mcqueen.585' target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook"/></a>
            </div>
        </footer>
    )
}

export default Footer