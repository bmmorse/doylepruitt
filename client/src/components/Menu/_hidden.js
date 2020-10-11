import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';

const HiddenMenuWrap = styled.div`
  background-color: white;
  position: fixed;
  height: calc(100vh - 3rem);
  width: 100%;
  top: 3rem;
  left: 0;
  z-index: 999;

  &.visible {
    display: flex;
  }

  &.hidden {
    display: none;
  }

  .links {
    display: flex;
    justify-content: flex-start;

    ul {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin: 2rem 0 0 2rem;

      a {
        font-size: 1rem;
        padding-bottom: 1rem;
      }
    }
  }

  @media (min-width: 1000px) {
    display: none !important;
  }
`;

const HiddenMenu = (props) => {
  return (
    <HiddenMenuWrap className={props.isHidden ? 'hidden' : 'visible'}>
      <div className='links'>
        <ul>
          <Link to='/' onClick={props.handleClick}>
            Home
          </Link>
          <Link to='/bio' onClick={props.handleClick}>
            Bio
          </Link>
          <Link to='/services' onClick={props.handleClick}>
            Services
          </Link>
          <Link to='/scholarship' onClick={props.handleClick}>
            Scholarship
          </Link>
          <Link to='/blog' onClick={props.handleClick}>
            Blog
          </Link>
          <Link to='/fees' onClick={props.handleClick}>
            Fees
          </Link>
          <Link to='/contact' onClick={props.handleClick}>
            Contact
          </Link>
        </ul>
      </div>
    </HiddenMenuWrap>
  );
};

export default HiddenMenu;
