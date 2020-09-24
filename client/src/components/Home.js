import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
  Link,
} from 'react-router-dom';
import { VAR } from './GlobalStyle';
import images from '../_images';

const Outer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const HiddenMenu = styled.div`
  background-color: white;
  position: fixed;
  height: calc(100vh - 3rem);
  width: 100%;
  top: 3rem;
  left: 0;
  display: ${(props) => (props.isHidden ? 'none' : 'flex')};
  @media (min-width: 1000px) {
    justify-content: center;
  }
`;

const HiddenMenuLinks = styled.div`
  display: flex;
  justify-content: flex-start;

  ul {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0 2rem;

    a {
      font-size: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

const Menu = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 6rem 0 0 6rem;
  // position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  top: 0;
  height: auto;
  display: none;
  @media (max-width: 1000px) {
    display: none;
  }

  a {
    align-self: flex-start;
    height: auto;
  }
`;

const Inner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1000px) {
    width: 576px;
  }
`;

const Header = styled.div`
  align-items: center;
  background: white;
  color: ${VAR.text};
  display: flex;
  flex-direction: column;
  padding: 6rem 0 0 0;
  width: 100%;

  @media (min-width: 1000px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }

  img {
    width: 128px;
  }
`;

const NamePhd = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 3rem 0 0 0;

  @media (min-width: 1000px) {
    align-items: flex-end;
    margin: 1rem 0 0 6rem;
  }

  h1 {
    font-family: ${VAR.lato};
    font-size: 2rem;
    line-height: 2rem;
  }

  span {
    font-size: 1rem;

    padding: 0;
  }
`;

const MenuButtonAnimation = keyframes`
  0%{background-position: 0% 0%;}
  0%{background-position: -1000px 500px;}
`;

const MenuButton = styled.div`
  animation: ${MenuButtonAnimation} 20s linear infinite;
  background: url('${images.lines500x500}') repeat;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: ${VAR.blue};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${VAR.text};
  font-size: 10px;

  a {
    display: block;
    text-decoration: none;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 5%;
  width: 100%;

  @media (min-width: 1000px) {
    padding: 6rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    padding: 0 0 0 3rem;
    li {
      padding-bottom: 1rem;
    }
  }

  p {
    color: ${VAR.text};
    font-size: 1rem;
    line-height: 1.6rem;
    margin-bottom: 2rem;
    max-width: 576px;
    width: 100%;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;

const IntroImages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    max-width: 576px;

    &:nth-child(1) {
      margin-bottom: 1.5rem;
    }
  }
`;

const Contact = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 8rem 0 0 0;
`;

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  img {
    height: auto;
    margin-bottom: 1rem;
    width: 3rem;
  }

  h3 {
    font-weight: normal;
    text-align: center;
  }
`;

export {
  Outer,
  HiddenMenu,
  Menu,
  Inner,
  Header,
  NamePhd,
  MenuButtonAnimation,
  MenuButton,
  HiddenMenuLinks,
  Text,
  IntroImages,
  Contact,
  ContactItem,
};
