import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ParallaxBackground from './components/ParallaxBackground';
import ScrollTop from './components/ScrollTop';
import ThemeSwitcher from './components/ThemeSwitcher';
import Browser from './components/Browser';
import Resume from './pages/ResumePage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <Switch>
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
