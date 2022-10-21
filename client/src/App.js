import React, { useState } from 'react';
import Globals from './Globals/index';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home/index';
import Page from './components/Page/index';
import { MobileDropdownContext } from './Globals/Context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components/macro';
import TopNav from './components/TopNav';

const DIV_WRAPPER = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter.fade-enter-active {
    transition: opacity 300ms ease-in 400ms;
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    transition: opacity 300ms ease-in;
    opacity: 0;
  }
`;

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
      <div className='app'>
        <TopNav onHomepage={true} />
        <TransitionGroup>
          <CSSTransition
            timeout={{ enter: 700, exit: 300 }}
            classNames='fade'
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path='/'>
                <DIV_WRAPPER>
                  <Home />
                </DIV_WRAPPER>
              </Route>

              <Route exact path='/bio'>
                <DIV_WRAPPER>
                  <Page path='/bio' />
                </DIV_WRAPPER>
              </Route>

              <Route exact path='/services'>
                <DIV_WRAPPER>
                  <Page path='/services' />
                </DIV_WRAPPER>
              </Route>

              <Route exact path='/fees'>
                <DIV_WRAPPER>
                  <Page path='/fees' />
                </DIV_WRAPPER>
              </Route>

              <Route exact path='/contact'>
                <DIV_WRAPPER>
                  <Page path='/contact' />
                </DIV_WRAPPER>
              </Route>
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </MobileDropdownContext.Provider>
  );
}
