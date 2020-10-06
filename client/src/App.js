import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
  Link,
} from 'react-router-dom';

// Components
import images from './components/_images';
import GlobalStyle from './components/GlobalStyle';
import Menu from './components/Menu';
import Home from './components/Home/index';

// Page Components
import Bio from './components/Pages/Bio';
import Services from './components/Pages/Services';
import Scholarship from './components/Pages/Scholarship';
import Fees from './components/Pages/Fees';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';

class App extends React.Component {
  state = {
    isHidden: true,
  };

  handleClick = (e) => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      return null;
    }

    const APP = styled.div`
      height: ${!this.state.isHidden ? '100vh' : 'auto'};
      overflow: ${!this.state.isHidden ? 'hidden' : 'auto'};
      position: relative;
      width: 100%;
    `;

    return (
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Switch>
          {/* APP */}
          <APP>
            <Menu
              isHidden={this.state.isHidden}
              handleClick={this.handleClick}
            />

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
          </APP>
        </Switch>
      </Router>
    );
  }
}

export default App;
