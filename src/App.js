import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import routes from './routes'

import './reset.scss';
import './App.scss';
import Particle from './components/Particles/Particle';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p className="not-supported">
        This device is not supported.
        A screen width of at least 220 pixels is required.
        If you somehow have a device that is this small,
        contact me and I will attempt to make my site support
        the thing. Contact me at (801) 558-7870
      </p>
      <div id='not-supported-particles'><Particle/></div>
        <Router>
          <Navbar />
          {routes}
        </Router>
      </div>
    );
  }
}

export default App;
