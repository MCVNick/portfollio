// Importing dependencies for this file
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

// Importing components as lazy so that they load only when needed
const Home = lazy(() => import('./components/Home/Home'))
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const ContactMe = lazy(() => import('./components/ContactMe/ContactMe'))
const Blank = lazy(() => import('./components/Blank/Blank'))

// This is where we export a switch statement that should be inside
// the routes under App.js. Only one of these routes will show up
// and be visible at a time
export default (
    // This is the switch statement that only allows one of these to
    // be shown
    <Switch>
        {/* This is what we are using to code split the routes */}
        {/* FIXME: add a cool component for the loading screen */}
        <Suspense fallback={<div>Loading...</div>}>
            {/* Here are each of the routes that we can go to */}
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/About-Me' component={AboutMe} />
            <Route path='/Skills' component={Skills} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Contact-Me' component={ContactMe} />
            <Route path='/Blank' component={Blank} />
        </Suspense>
    </Switch>
)