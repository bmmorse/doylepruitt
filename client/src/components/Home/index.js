import React from 'react';
import Header from '../Header';
import IntroText from '../IntroText';
import HelpClients from '../HelpClients';
import ImageBar from '../ImageBar';
import ContactFooter from '../Footer';
import TopNav from '../TopNav';
import Menu from '../Menu';
import styled from 'styled-components/macro';

export default function Home() {
  return (
    <>
      <TopNav onHomepage={true} />
      <Header height='100vh' />
      <IntroText />
      <ImageBar />
      {/* <LogoText /> */}
      <HelpClients />
      <ContactFooter />
      <Menu />
    </>
  );
}
