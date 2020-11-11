import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

// Body Scroll Lock
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

// Components
import GlobalStyle from './components/GlobalStyle';
import Menu from './components/Menu/index';
import Home from './components/Home/index';

// Page Components
import Bio from './components/Pages/Bio';
import Services from './components/Pages/Services';
import Scholarship from './components/Pages/Scholarship';
import Fees from './components/Pages/Fees';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
    };
  }

  toggleMenu = (e) => {
    disableBodyScroll();

    this.setState({ mobileMenu: !this.state.mobileMenu });
  };

  render() {
    return (
      <Router>
        <ScrollToTop />
        <GlobalStyle />

        {/* The App */}
        <div className={`App ${this.state.mobileMenu ? 'freeze' : 'unfreeze'}`}>
          <Menu
            mobileMenu={this.state.mobileMenu}
            toggleMenu={this.toggleMenu}
          />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/bio'>
              <Bio />
            </Route>

            <Route exact path='/services'>
              <Services />
            </Route>

            <Route exact path='/scholarship'>
              <Scholarship />
            </Route>

            <Route exact path='/blog'>
              <Blog />
            </Route>

            <Route exact path='/fees'>
              <Fees />
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
