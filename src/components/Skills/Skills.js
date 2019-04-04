import React from 'react'

import Particle from './../Particles/Particle'
import Footer from './../Footer/Footer'

import CSS3 from './../../resources/SkillIcons/CSS3.png'
import Express from './../../resources/SkillIcons/Express.png'
import HTML5 from './../../resources/SkillIcons/HTML5.png'
import JavaScript from './../../resources/SkillIcons/JavaScript.png'
import NodeJS from './../../resources/SkillIcons/NodeJS.png'
import PostgreSQL from './../../resources/SkillIcons/PostgreSQL.png'
import ReactIcon from './../../resources/SkillIcons/React.png'
import Redux from './../../resources/SkillIcons/Redux.png'

import './Skills.scss'

const Skills = () => {
    return (
        <main id='skills-parent-comp'>
            <div className='skills'>
                <div className='skills-header'>
                    <h1>Skills</h1>
                </div>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://reactjs.org/docs/getting-started.html'><img src={ReactIcon} alt='React' /></a>
                        <h1>React</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://devdocs.io/javascript/'><img src={JavaScript} alt='JavaScript' /></a>
                        <h1>JavaScript</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://devdocs.io/html/'><img src={HTML5} alt='HTML5' /></a>
                        <h1>HTML5</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://devdocs.io/css/'><img src={CSS3} alt='CSS3' /></a>
                        <h1>CSS3</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.postgresql.org/docs/'><img src={PostgreSQL} alt='PostgreSQL' /></a>
                        <h1>PostgreSQL</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://nodejs.org/en/docs/'><img src={NodeJS} alt='Node.JS' /></a>
                        <h1>Node.JS</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://expressjs.com/en/api.html'><img src={Express} alt='Express' /></a>
                        <h1>Express</h1>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://redux.js.org/'><img src={Redux} alt='Redux' /></a>
                        <h1>Redux</h1>
                    </li>
                </ul>
            </div>
            <Footer />
            <Particle />
        </main>
    )
}

export default Skills