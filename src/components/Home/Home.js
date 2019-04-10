import React from 'react'

import Footer from '../Footer/Footer';

import './Home.scss'

const Home = (props) => {
    return (
        <main id='home-parent-comp'>
            <div className='home-header-parent'>
                <section>
                    <div>
                        <h1>Nick McQueen</h1>
                        <h2>Web Developer</h2>
                    </div>
                </section>
            </div>
            <div className='secret-blank-page' onClick={() => {console.log(props.history.push('/blank'))}}></div>
            <Footer />
        </main>
    )
}

export default Home