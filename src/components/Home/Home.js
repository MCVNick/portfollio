import React from 'react'

import Particle from './../Particles/Particle'

import './Home.scss'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <main id='home-parent-comp'>
            <div className='home-header-parent'>
                <section>
                    <div>
                        <h1>Nick McQueen</h1>
                        <h2>Web Designer</h2>
                    </div>
                </section>
            </div>
            <Particle />
            <Footer />
        </main>
    )
}

export default Home