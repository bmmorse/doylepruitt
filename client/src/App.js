import React, { useState } from 'react';
import Globals from './Globals/index';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { MobileDropdownContext } from './Globals/Context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components/macro';
import TopNav from './components/TopNav';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import MobileMenu from './components/Menu';
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';

const DIV_TRANSITION_WRAPPER = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter.fade-enter-active {
    transition: opacity 300ms ease-in;
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    transition: opacity 300ms ease-in 300ms;
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

  function Home() {
    return (
      <DIV_TRANSITION_WRAPPER>
        <Header />
        <HomeContent />
        <Footer />
      </DIV_TRANSITION_WRAPPER>
    );
  }

  function Page() {
    return (
      <DIV_TRANSITION_WRAPPER>
        <PageHeader />
        <PageContent />
        <Footer />
      </DIV_TRANSITION_WRAPPER>
    );
  }

  return (
    <MobileDropdownContext.Provider
      value={{ menuExpanded, setMenuExpanded, routes }}
    >
      <Globals />
      <div className='app'>
        <TopNav />
        <TransitionGroup>
          <CSSTransition
            timeout={{ enter: 300, exit: 600 }}
            classNames='fade'
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/bio'>
                <Page />
              </Route>

              <Route exact path='/services'>
                <Page />
              </Route>

              <Route exact path='/fees'>
                <Page />
              </Route>

              <Route exact path='/contact'>
                <Page />
              </Route>

              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <MobileMenu />
      </div>
    </MobileDropdownContext.Provider>
  );
}
