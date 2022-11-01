import React, { useState, useRef } from 'react';
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
import Card from './components/Card';
import Hamburger from './components/Hamburger';

const DIV_TRANSITION_WRAPPER = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter.fade-enter-active {
    transition: opacity 500ms ease-out 500ms;
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    transition: opacity 500ms ease-out;
    opacity: 0;
  }
`;

export default function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const location = useLocation();
  const nodeRef = useRef(null);

  function Home() {
    return (
      <DIV_TRANSITION_WRAPPER>
        <Header />

        <Card content='myServices' alignImage='left' />
        <Card content='aboutMe' alignImage='right' />

        {/* <HomeContent /> */}
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
    <>
      <Globals />
      <div className='app'>
        <TopNav />
        <TransitionGroup>
          <CSSTransition
            timeout={{ enter: 1000, exit: 500 }}
            classNames='fade'
            key={location.key}
            ref={nodeRef}
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
      </div>
    </>
  );
}
