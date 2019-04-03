import React from 'react'
import axios from 'axios'

import Particle from './../Particles/Particle'
import Footer from './../Footer/Footer'

import facebookIcon from './../../resources/Facebook.png'
import githubIcon from './../../resources/Github.png'
import linkedInIcon from './../../resources/LinkedIn.png'

import './ContactMe.scss'

const ContactMe = () => {
    return (
        <main id='contact-me-parent-comp'>
            <div className='contact-me'>
                <section>
                    <h1 className='contact-header'>CONTACT</h1>

                    <h1>Nick McQueen</h1>
                    <h1>nickmcqueen111@gmail.com</h1>
                    <h1>—</h1>
                    <h1>Tel: (801) 558-7870</h1>
                    <a href='https://github.com/MCVNick' target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn"/></a>
                    <a href='https://www.linkedin.com/in/n-mcqueen/' target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub"/></a>
                    <a href='https://www.facebook.com/nick.mcqueen.585' target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook"/></a>
                </section>
                <form onSubmit={(event) => {
                        event.preventDefault();
                        const from = event.target[0].value
                        const name = event.target[1].value
                        const message = event.target[2].value
                        const obj = {from, name, message}

                        if (from && name && message) {
                            axios.post('/send', obj)
                            event.target[0].value = ''
                            event.target[1].value = ''
                            event.target[2].value = ''
                        } else {

                        }
                    }}>
                    <input className='email-input' placeholder='Email'/>
                    <input className='name-input' placeholder='Name'/>
                    <textarea className='message-input' placeholder='Message'/>
                    <button>Send</button>
                </form>
            </div>
            <Particle />
            <Footer />
        </main>
    )
}

export default ContactMe