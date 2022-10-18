import React from 'react';
import Content from '../PageContent';
import Footer from '../Footer';
import TopNav from '../TopNav';
import Menu from '../Menu';
import styled from 'styled-components/macro';

export default function Page(props) {
  return (
    <>
      <TopNav onHomepage={false} />
      <Content path={props.path} />
      <Footer />
      <Menu />
    </>
  );
}
