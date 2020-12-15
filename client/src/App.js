import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import GlobalCSS from './helpers/GlobalCSS';
import { ScrollToTop } from './helpers/functions';

// Site Nav
import routes from './helpers/routes';
import Menu from './components/Menu/index';

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
              <Route key={e.name} exact path={e.path}>
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
