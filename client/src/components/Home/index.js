import React from 'react';
import Header from '../Header/index';
import IntroText from './IntroText';
import HelpClients from './Help Clients/index';
import ImageBar from './ImageBar';
import ContactFooter from '../Footer/ContactFooter';
import Menu from '../Menu/index';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Header height='100vh' />
        <IntroText />
        <ImageBar />
        {/* <LogoText /> */}
        <HelpClients />
        <ContactFooter />
      </>
    );
  }
}
