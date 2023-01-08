import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components';

// styled.div
// createGlobalStyle

const GlobalCSS = createGlobalStyle`
  html {
    /* scroll-behavior: smooth; */
  }

  :root {
    --text: #1a1423;
    --blue: #9bc0f7;
    --white: #ffffff;
    --orange: #ffcdb2;
    --grey: #fdfdfd;
    --lightText: #757575;
    --skyblue: #233754;
  }

  * {
    box-sizing: border-box;
    color: #242729;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--darkBlue);
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
    background-color: var(--skyblue);
    &.frozen {
      height: 105vh;
      overflow: hidden;
    }
  }

  a,
  a:visited {
    text-decoration: none;
  }

  #App {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    font-weight: normal;
    color: var(--text);
  }

  span {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    letter-spacing: inherit;
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

  /* Animated Routes */
  .page {
    position: absolute;
    left: 0px;
    right: 0px;

    &-enter {
      opacity: 0;
    }

    &-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in-out;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }
  }

  /* Updated Typography *******************************************************/
  p,
  li {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.25px;
    color: #494949;
  }

  // Dr. Doyle Pruitt -- in the top navigation bar
  .name a {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    text-transform: none;
  }

  .links a {
    font-family: 'Open Sans';
    font-style: normal;
    /* text-transform: uppercase; */
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.5px;
  }

  a.linkButton {
    font-family: 'Open Sans';
    padding: 15px 23px;
    color: var(--orange);
    border: solid 1px var(--orange);
    border-radius: 4px;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 80px;
    letter-spacing: -1.5px;
    line-height: 96px;
    column-gap: 16px;

    @media (max-width: 600px) {
      font-family: 'Poppins';
      font-weight: 300;
      font-size: 48px;
      letter-spacing: -0.5px;
      line-height: 64px;
      column-gap: 8px;
    }
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;

    @media (max-width: 600px) {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
    }
  }

  h3 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 36px;
    line-height: 56px;
    letter-spacing: 0px;

    @media (max-width: 600px) {
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
  }

  h4 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0px;
  }
`;

export default GlobalCSS;
