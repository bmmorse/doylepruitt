import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';

const HiddenMenu = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3rem);
  left: 0;
  padding: 1rem 0 0 0;
  position: fixed;
  width: 100%;
  top: 3rem;
  z-index: 999;

  &.visible {
    display: flex;
  }

  &.hidden {
    display: none;
  }

  a {
    font-size: 2rem;
    padding: 1rem 0;
    text-align: center;
    width: 100%;
  }

  @media (min-width: 1000px) {
    display: none !important;
  }
`;

/**
 * @props mobileMenu | boolean
 *   this.state.mobileMenu, defaults to false
 *
 * @props toggleMenu | function
 *   this.toggleMenu, function that changes mobileMenu
 */
const HiddenMenuFunc = (props) => {
  return (
    <HiddenMenu className={props.mobileMenu ? 'visible' : 'hidden'}>
      {VAR.routes.map((e) => {
        return (
          <Link to={e.path} onClick={props.toggleMenu}>
            {e.name}
          </Link>
        );
      })}
    </HiddenMenu>
  );
};

export default HiddenMenuFunc;
