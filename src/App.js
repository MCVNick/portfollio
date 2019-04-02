import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import routes from './routes'

import './reset.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          {routes}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
