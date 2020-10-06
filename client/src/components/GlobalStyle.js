import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import VAR from './VAR';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    font-size: 16px;
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

  p {
    font-family ${VAR.playfair};
  }

  .App {
    position: relative;
    width: 100%;
  }
`;

export default GlobalStyle;
