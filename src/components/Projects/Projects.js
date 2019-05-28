import React from 'react'

import Footer from './../Footer/Footer'

import nslVideo from './../../resources/nslVideo.mp4'
import pearProgrammingVideo from './../../resources/PearProgrammingVideo.mp4'
import mtgVideo from './../../resources/mtgVideo.mp4'

import './Projects.scss'

const Projects = () => {
    return (
        <main id='projects-parent-comp'>
            <div className='projects'>
                <h2>Projects</h2>
                <article>
                    <h1>799 Scouts Website</h1>
                    {/* <details>
                        <summary>Video Walkthrough</summary>
                    </details> */}
                    <div className="links">
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/MCVNick/799scouts'>799 Scouts GitHub</a>
                        <p>|</p>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.799scouts.com/'>799 Scouts Website</a>
                    </div>
                    <p>This is the scouts website for troop and pack 799. I am currently working on it,
                        so you will have to visit the website to see what it looks like.
                    </p>
                </article>
                <article>
                    <h1>NSL Personal Project</h1>
                    <details>
                        <summary>Video Walkthrough</summary>
                        <div className='contain-video'><video src={nslVideo} controls='controls' /></div>
                    </details>
                    <details className='embedded-website'>
                        <summary>Embedded Website</summary>
                        <p>
                            Note: The website updates periodically to not hit an API
                            cap. You may need to refresh the page if clicking on an
                            article results in an empty page.
                        </p>
                        <div className='nsl-embedded'><iframe title='NSL' src="https://nsl.nicholasmcqueen.com/" frameborder="0"></iframe></div>
                    </details>
                    <div className='links'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/MCVNick/nsl-classifieds'>NSL GitHub</a>
                        <p>|</p>
                        <a target="_blank" rel="noopener noreferrer" href='https://nsl.nicholasmcqueen.com/'>NSL Website</a>
                    </div>
                    <p>This was a three week project that I was able to work on cloning
                        KSL's website. In this project I learned how to use CSS Grid,
                        SCSS, JavaScript to manipulate classes and cause tabs to close.
                        I also worked on form validation and the back end. The back
                        end used massive. It also was able to control when the web
                        page loaded new content. This allowed for the API that I was
                        using to not hit it's daily limit.
                    </p>
                </article>
                <article>
                    <h1>Pear Programming Group Project</h1>
                    <details>
                        <summary>Video Walkthrough</summary>
                        <div className='contain-video'><video src={pearProgrammingVideo} controls='controls' /></div>
                    </details>
                    <div className='links'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/sudorm-rfdot/pearprogramming'>PearProgramming GitHub</a>
                        <p>|</p>
                        <a target="_blank" rel="noopener noreferrer" href='https://pearprogramming.co/'>PearProgramming Website</a>
                    </div>
                    <p className='not-ending-article-p-tag'>
                        This is another three week project that I worked on at DevMountain.
                        During this project I worked with three other members to create an
                        online code editor. We used Monaco, Socket.io, Amazon S3, React
                        Dropzone, SCSS, bcrypt, express, massive, and many more. This
                        project also had lots of form validation.
                    </p>
                    <p>
                        Working on a team was amazing. We all came up with solutions and
                        worked together very well. During this project we also learned to
                        develop our skills on GitHub.
                    </p>
                </article>
                <article>
                    <h1>Magic Card Personal Project</h1>
                    <details>
                        <summary>Video Walkthrough</summary>
                        <div className='contain-video'><video src={mtgVideo} controls='controls' /></div>
                    </details>
                    <div className='links'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/MCVNick/crud-magic-api'>PearProgramming GitHub</a>
                    </div>
                    <p>
                        This was my very first project at DevMountain. It was a project that
                        taught us that we were supposed to use full CRUD (Create, Read, Update,
                        and Delete) on websites. In my app I was able to search through a
                        catalog of Magic cards. There were 260,000 cards it could search for and
                        find.
                    </p>
                </article>
            </div>
            <Footer />
        </main>
    )
}

export default Projects