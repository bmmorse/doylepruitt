import React from 'react';
import Content from '../PageContent';
import Footer from '../Footer';
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

export default function Page(props) {
  return (
    <DIV_FULL>
      <TopNav onHomepage={false} />
      <Content path={props.path} />
      <Footer />
      <Menu />
    </DIV_FULL>
  );
}
