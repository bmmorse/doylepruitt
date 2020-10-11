import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import VAR from './VAR';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;

  }

  body {
    color: ${VAR.dark_1};
    font-family: ${VAR.lato};
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
`;

export default GlobalStyle;
