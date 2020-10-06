import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from './VAR';
import layout from './_layout';

const FullWidth = styled(layout.full)``;

const Menu = styled.div`
  height: 4rem;
  max-width: ${VAR.media1024};
  width: 100%;

  ul {
    align-items: center;
    display: none;
    height: 100%;
    justify-content: space-between;
    width: 100%;

    li {
      list-style-type: none;
      a {
        font-size: 0.75rem;
        line-height: 1rem;
        padding: 1.5rem 2rem;
        transition: opacity 200ms ease;
      }
      a:hover {
        opacity: 0.4;
      }
    }

    @media (min-width: ${VAR.media640}) {
      display: flex;
    }
  }
`;

const MobileButton = styled.div`
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.92);
  border-radius: 0.2rem;
  color: ${VAR.text};
  display: flex;
  font-size: 0.75rem;
  height: 4rem;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;

  a {
    display: block;
    text-decoration: none;
  }

  @media (min-width: ${VAR.media640}) {
    display: none;
  }
`;

const VisibleMenu = (props) => {
  return (
    <FullWidth>
      <Menu>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/bio'>Bio</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/scholarship'>Scholarship</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/fees'>Fees</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <MobileButton onClick={props.handleClick}>Menu</MobileButton>
      </Menu>
    </FullWidth>
  );
};

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

const MenuFunc = (props) => {
  return (
    <>
      <VisibleMenu isHidden={props.isHidden} handleClick={props.handleClick} />
      <HiddenMenu isHidden={props.isHidden} handleClick={props.handleClick} />
    </>
  );
};

export default MenuFunc;
