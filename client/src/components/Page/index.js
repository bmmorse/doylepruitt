import React from 'react';
import Content from '../PageContent';
import Footer from '../Footer';
import TopNav from '../TopNav';
import Menu from '../Menu';
import PageHeader from '../PageHeader';
import BottomFooter from '../BottomFooter';
import data from './data';

import styled from 'styled-components/macro';

export default function Page() {
  return (
    <>
      {/* <TopNav onHomepage={false} /> */}
      <PageHeader />
      <Content />
      <Footer />
      <BottomFooter />
      <Menu />
    </>
  );
}
