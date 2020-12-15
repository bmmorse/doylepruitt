import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../../helpers/VAR';
import layout from '../_layout';

// import routes
import routes from '../../helpers/routes';

const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeout = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const HiddenMenu = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  left: 0;
  padding: 1rem 0 0 0;
  position: fixed;
  width: 100%;
  top: 4rem;
  z-index: 999;

  &.visible {
    animation: ${fadein} 400ms ease;
  }

  &.hidden {
    animation: ${fadeout} 400ms ease;
    display: none;
  }

  a {
    font-size: 1.5rem;
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
      {routes.map((e) => {
        return (
          <Link to={e.path} key={e.path} onClick={props.toggleMenu}>
            {e.name}
          </Link>
        );
      })}
    </HiddenMenu>
  );
};

export default HiddenMenuFunc;
