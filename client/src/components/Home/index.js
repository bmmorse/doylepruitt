import React from 'react';
import Header from '../Header/index';
import IntroText from './IntroText';
import LogoText from './LogoText';
import HelpClients from './HelpClients';
import ImageBar from './ImageBar';
import ContactFooter from '../Footer/ContactFooter';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header home_page={true} />
        <IntroText />
        <LogoText />
        <HelpClients />
        <ImageBar />
        <ContactFooter />
      </>
    );
  }
}
