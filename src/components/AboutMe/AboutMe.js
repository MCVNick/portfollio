import React from 'react'

import Particle from './../Particles/Particle'
import Footer from './../Footer/Footer'

import './AboutMe.scss'

const AboutMe = () => {
    return (
        <main id='about-me-parent-comp'>
            <div className='about-me'>
                <section>
                    <h1>About Me</h1>
                    <p>
                        As an achiever I love to learn every day. I also know 
                        that every time I work on something that I can always 
                        improve. This makes it easy for me to always push myself 
                        forward into difficult tasks. I am also a very strategic 
                        thinker; I can quickly find patterns and sort through a 
                        mess of solutions to find the most efficient way to solve 
                        a problem. But most of all I am an Includer. As an Includer 
                        I love to find people who are looking into a group and 
                        invite them in so that they can also participate in the 
                        group. I can always find something to say about every 
                        person I meet. I am very accepting and cast no judgement 
                        onto others.
                    </p>
                </section>
            </div>
            <Footer />
            <Particle />
        </main>
    )
}

export default AboutMe