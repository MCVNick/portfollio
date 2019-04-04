import React from 'react'

import Particle from './../Particles/Particle'
import Footer from './../Footer/Footer'

import nslVideo from './../../resources/nslVideo.mp4'

import './Projects.scss'

const Projects = () => {
    return (
        <main id='projects-parent-comp'>
            <div className='projects'>
                <h2>Projects</h2>
                <article>
                    <h1>NSL Personal Project</h1>
                    <div className='contain-video'><video src={nslVideo} controls='controls'/></div>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/MCVNick/nsl-classifieds'>NSL GitHub</a>
                    <a target="_blank" rel="noopener noreferrer" href='https://nsl.nicholasmcqueen.com/'>NSL Website</a>
                    <p>This was a three week project that I was able to work on cloning 
                        KSL's website. In this project I learned how to use CSS Grid, 
                        SCSS, JavaScript to manipulate classes and cause tabs to close.
                         I also worked on form validation and the back end. The back 
                         end used massive. It also was able to control when the web 
                         page loaded new content. This allowed for the API that I was 
                         using to not hit it's daily limit.
                    </p>
                </article>
            </div>
            <Particle />
            <Footer />
        </main>
    )
}

export default Projects