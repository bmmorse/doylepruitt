import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const VAR = {
  lato: `'Lato', sans-serif`,
  playfair: `'Playfair Display', serif`,

  // Colors
  dark_1: 'hsla(0, 0%, 16%, 1)',
  color_1: 'hsla(182, 62%, 90%, 1)',

  // Media queries
  mediaXL: '64rem', // 1024px
  mediaM: '40rem', // 640px
};

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

export { GlobalStyle, VAR };
