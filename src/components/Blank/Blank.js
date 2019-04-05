import React, { createRef } from 'react'

import Particle from './../Particles/Particle'

import './Blank.scss'

const Blank = (props) => {
    const header = createRef()
    const secondHeader = createRef()
    const buttonOne = createRef()
    const buttonTwo = createRef()

    return (
        <div id='blank-parent-comp'>
            <div className='notify-not-mistake'>
                <h1 ref={header} className={setTimeout(function () { if (header.current) { header.current.classList.add('none') } }, 5000)}>You Found the Secret Page</h1>
                <h1 ref={secondHeader} className={`none ${setTimeout(function () {
                    if (secondHeader.current) { secondHeader.current.classList.remove('none') }
                    setTimeout(function () {
                        if (secondHeader.current) { secondHeader.current.classList.add('none') }
                    }, 5000)
                }, 5000)}`}>Enjoy clicking on the bubbles
                </h1>
                <button ref={buttonOne} className='home-button' onClick={() => props.history.push('/Home')}>Go Home</button>
                <button ref={buttonTwo} className='hide-button' onClick={() => { buttonOne.current.classList.add('none'); buttonTwo.current.classList.add('none') }}>Hide Buttons</button>
            </div>
            <Particle />
        </div>
    )
}

export default Blank