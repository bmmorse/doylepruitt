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
  }

  :root {
  --sans: 'DM Sans', sans-serif;
  --serif: 'DM Serif Display', serif;
  --grey20: #333333;
  --grey32: #515151;
  --grey64: #a3a3a3;
  --orange: #fab26f;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }

  a,a:visited {
    text-decoration: none;
  }

  .app {
    position: relative;
    width: 100%;
    min-height: 100vh;
    &.frozen {
      height: 100vh;
      overflow: hidden;
    }
    
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--serif);
    font-weight: normal;
  }

  h2 {
    font-size:2rem;
    line-height:1;
  }

  p,span {
    color: #242729;
    line-height: 1.5;
    font-size: 18px;
    font-family: var(--sans);
  }

  button {
    border: none;
    outline: none;
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
