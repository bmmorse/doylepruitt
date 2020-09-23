import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const VAR = {
  text: 'hsla(206, 68%, 6%, 1)',
  textLight: 'hsla(206, 68%, 32%, 1)',

  lightRed: 'hsla(360, 100%,90%,0.7)',
  dark: '#333333',
  blue: 'hsla(200, 100%, 90%, 1)',
  linearBlue: 'linear-gradient(180deg, #CCEEFF 0%, #FFFFFF 100%)',
  lato: `'Lato', sans-serif`,
  playfair: `'Playfair Display', serif`,
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  body {
    color: ${VAR.dark};
    font-family: ${VAR.lato};
    font-size: 24px;
  }

  a,a:visited {
    color: ${VAR.dark};
    text-decoration: none;
  }

  .App {
    position: relative;
    width: 100%;
  }
`;

export { GlobalStyle, VAR };
