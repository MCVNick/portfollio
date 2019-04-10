import React from 'react'
import Particles from 'react-particles-js';

import particles from './../../resources/particles.json'

import './Particle.scss'

const Particle = () => {
    return (
        <div className='particle-parent-comp'>
            <Particles params={particles} />
        </div>
    )
}

export default Particle