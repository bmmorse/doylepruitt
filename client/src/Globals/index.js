import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import VAR from './variables';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const GlobalCSS = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${VAR.dark_1};
    font-family: ${VAR.lato};
    // font-display: swap
  }

  a,a:visited {
    color: ${VAR.dark_1};
    text-decoration: none;
  }

  h2,
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
    max-width: ${VAR.media640};
    width: 100%;
  }

  p {
    font-family: ${VAR.lato};
    font-weight: 400;
  }

  .App {
    position: relative;
    width: 100%;
  }  

  .freeze {
    height: 0vh;
    overflow: hidden; 
  }
  
  .unfreeze {
    height: auto;
    overflow: auto;
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
