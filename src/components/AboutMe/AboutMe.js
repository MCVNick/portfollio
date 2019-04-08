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
                        Every day is an opportunity to learn something new
                        and grow from experience. I’m a results oriented person
                        who enjoys the challenges that writing code can present.
                        My problem solving skills, as well as my strategic
                        thinking give me the ability to quickly find efficient
                        solution to a problem. I’m a self-starter and work well
                        individually while also enjoying the interaction and
                        dynamics of a team environment. I take pride in my work
                        and feel a sense of accomplishment in a job well done. I
                        always strive to meet or exceed the requirements of a
                        project before me. I enjoy video games, Scouting, being
                        outdoors and volunteering at my church
                    </p>
                </section>
            </div>
            <Footer />
            <Particle />
        </main>
    )
}

export default AboutMe