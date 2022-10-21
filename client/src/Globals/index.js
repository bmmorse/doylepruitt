import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components/macro';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, [pathname]);

  return null;
}

const GlobalCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #242729;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    color: var(--darkBlue);
  }

  :root {
  --blue: #507ABA;
  --text: #1a1423;
  --red: #de3c4b;
  --white: #fbfbf2;
  --green: #507ABA;
  }

  *:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  body {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    &.frozen {
      height: 100vh;
      overflow: hidden;
    }
  }

  a,a:visited {
    text-decoration: none;
  }

  .app {
    position: relative;
    width: 100%;
    min-height: 100vh;    
  }

  h1,h2,h3,h4,h5,h6,a,p {
    font-weight: normal;
    color:var(--text);
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }

  p,span {
    font-size: 16px;
    line-height: 32px;
  }

  button {
    border: none;
    outline: none;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  .linkButton {
    font-size: 14px;
    line-height: 24px;
    padding: 7px 14px;
    color: var(--text);
    border: solid 1px var(--text);
    border-radius: 2px;
    background: transparent;
  }

`;

export default class Globals extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <GlobalCSS />
      </>
    );
  }
}
