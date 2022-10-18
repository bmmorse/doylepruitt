import React from 'react';
import Header from '../Header';
import IntroText from '../IntroText';
import HelpClients from '../HelpClients';
import ImageBar from '../ImageBar';
import ContactFooter from '../Footer';
import TopNav from '../TopNav';
import Menu from '../Menu';
import styled from 'styled-components/macro';

const DIV_FULL = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in 300ms;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;

    transition: opacity 300ms ease-in;
  }
`;

export default function Home() {
  return (
    <DIV_FULL>
      <TopNav onHomepage={true} />
      <Header height='100vh' />
      <IntroText />
      <ImageBar />
      {/* <LogoText /> */}
      <HelpClients />
      <ContactFooter />
      <Menu />
    </DIV_FULL>
  );
}
