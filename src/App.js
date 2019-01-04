import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
