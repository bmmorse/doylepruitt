import React, { useState } from 'react';
import Globals from './Globals/index';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home/index';
import Page from './components/Page/index';
import { MobileDropdownContext } from './Globals/Context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const location = useLocation();
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Bio',
      path: '/bio',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Fees',
      path: '/fees',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <MobileDropdownContext.Provider
      value={{ menuExpanded, setMenuExpanded, routes }}
    >
      <Globals />
      <div className={menuExpanded ? 'app frozen' : 'app'}>
        <TransitionGroup>
          <CSSTransition timeout={600} classNames='fade' key={location.key}>
            <Switch location={location}>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/bio'>
                <Page path='/bio' />
              </Route>

              <Route exact path='/services'>
                <Page path='/services' />
              </Route>

              <Route exact path='/fees'>
                <Page path='/fees' />
              </Route>

              <Route exact path='/contact'>
                <Page path='/contact' />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </MobileDropdownContext.Provider>
  );
}
