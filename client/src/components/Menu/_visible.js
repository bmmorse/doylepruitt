import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';

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

    @media (min-width: ${VAR.media768}) {
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

  @media (min-width: ${VAR.media768}) {
    display: none;
  }
`;

/**
 * @props toggleMenu | function
 *   this.toggleMenu, function that changes mobileMenu
 */
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

        <MobileButton onClick={props.toggleMenu}>Menu</MobileButton>
      </Menu>
    </FullWidth>
  );
};

export default VisibleMenu;
