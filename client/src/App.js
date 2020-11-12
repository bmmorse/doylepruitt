import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import GlobalCSS from './helpers/GlobalCSS';
import { ScrollToTop } from './helpers/functions';

// Components
import Menu from './components/Menu/index';
import Home from './components/Home/index';

// Page Components
import Bio from './components/Pages/Bio';
import Services from './components/Pages/Services';
import Scholarship from './components/Pages/Scholarship';
import Fees from './components/Pages/Fees';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
    };
  }

  toggleMenu = (e) => {
    this.setState({ mobileMenu: !this.state.mobileMenu });
  };

  render() {
    const routes = [
      {
        name: 'Home',
        path: '/',
        component: Home,
      },
      {
        name: 'Bio',
        path: '/bio',
        component: Bio,
      },
      {
        name: 'Services',
        path: '/services',
        component: Services,
      },
      {
        name: 'Scholarship',
        path: '/scholarship',
        component: Scholarship,
      },
      {
        name: 'Blog',
        path: '/blog',
        component: Blog,
      },
      {
        name: 'Fees',
        path: '/Fees',
        component: Fees,
      },
      {
        name: 'Contact',
        path: '/contact',
        component: Contact,
      },
    ];
    return (
      <Router>
        <ScrollToTop />
        <GlobalCSS />

        {/* App */}
        <div className={`App ${this.state.mobileMenu ? 'freeze' : 'unfreeze'}`}>
          <Menu
            mobileMenu={this.state.mobileMenu}
            toggleMenu={this.toggleMenu}
          />
          <Switch>
            {routes.map((e) => (
              <Route exact path={e.path}>
                {e.component}
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
