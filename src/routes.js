import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

// import Home from './components/Home/Home';
// import AboutMe from './components/AboutMe/AboutMe';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import ContactMe from './components/ContactMe/ContactMe';
// import Blank from './components/Blank/Blank';
const Home = lazy(() => import ('./components/Home/Home'))
const AboutMe = lazy(() => import ('./components/AboutMe/AboutMe'))
const Skills = lazy(() => import ('./components/Skills/Skills'))
const Projects = lazy(() => import ('./components/Projects/Projects'))
const ContactMe = lazy(() => import ('./components/ContactMe/ContactMe'))
const Blank = lazy(() => import ('./components/Blank/Blank'))



export default (
    <Switch>
        <Suspense fallback={<div>Loading...</div>}>
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