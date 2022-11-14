import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components';

// styled.div
// createGlobalStyle

const GlobalCSS = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  :root {
    --blue: #5386e4;
    --text: #1a1423;
    --purple: #8789c0;
    --red: #de3c4b;
    --white: #fbfbf2;
    --lavender: #f2f0f9;
    --orange: #ffcdb2;
    /* Sunset */
    --sunset1: #6d6875;
    --sunset2: #b5838d;
    --sunset3: #e5989b;
    --sunset4: #ffb4a2;
    --sunset5: #ffcdb2;
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
    background-color: var(--text);
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
      transition: opacity 500ms;
    }

    &-exit {
      opacity: 1;
    }

    &-exit-active {
      opacity: 0;
      transition: opacity 500ms;
    }
  }

  /* Updated Typography */
  p,
  li {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.25px;
  }

  button,
  a {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 76px;
    letter-spacing: -1.5px;
    line-height: 88px;
    column-gap: 16px;

    @media (max-width: 480px) {
      font-family: 'Poppins';
      font-weight: 300;
      font-size: 46px;
      letter-spacing: -0.5px;
      line-height: 56px;
      column-gap: 8px;
    }
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 58px;
    line-height: 72px;
    letter-spacing: -0.5px;

    @media (max-width: 480px) {
      font-family: 'Poppins';
      font-weight: 300;
      font-size: 40px;
      letter-spacing: -0.5px;
      line-height: 48px;
      column-gap: 8px;
    }
  }

  h3 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 46px;
    line-height: 56px;
    letter-spacing: 0px;

    @media (max-width: 500px) {
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 33px;
      letter-spacing: 0px;
      line-height: 40px;
      column-gap: 8px;
    }
  }

  h4 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 33px;
    line-height: 40px;

    letter-spacing: 0.25px;
  }

  h5 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;

    letter-spacing: 0px;
  }

  h6 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 19px;
    letter-spacing: 0.15px;
  }
`;

export default GlobalCSS;
