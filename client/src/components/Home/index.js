import React from 'react';
import Header from '../Header';
import IntroText from '../IntroText';
import HelpClients from '../HelpClients';
import ImageBar from '../ImageBar';
import ContactFooter from '../Footer';
import HomeCards from '../HomeCards';
import Bottom from '../BottomFooter';

import TopNav from '../TopNav';
import Menu from '../Menu';
import styled from 'styled-components/macro';

export default function Home() {
  return (
    <>
      <Header height='100vh' />
      <IntroText />
      <HomeCards />
      {/* <ImageBar /> */}
      {/* <HelpClients /> */}
      <ContactFooter />
      <Bottom />
      <Menu />
    </>
  );
}
