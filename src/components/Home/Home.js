import React from 'react'

import Particle from './../Particles/Particle'
import Stars from './../../resources/Stars.png'

import './Home.scss'

const Home = () => {
    return (
        <main id='home-parent-comp'>
            <img src={Stars} alt='stars'></img>
            <Particle />
        </main>
    )
}

export default Home