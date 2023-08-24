import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';
import Hamburger from './Hamburger';
import { CSSTransition } from 'react-transition-group';

const DIV_FULL = styled.div`
  position: fixed;
  height: 64px;
  z-index: 900;
  background: var(--white);
  padding: 0 max(calc((100vw - 1280px) / 2), 24px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  backface-visibility: hidden;
  align-items: center;

  .name {
    a {
      margin: 0 8px 0 0;
      color: var(--lightText);
    }
  }

  .links {
    justify-content: center;
    display: flex;
    height: 100%;
    align-items: center;

    a {
      display: none;
      width: 100%;
      text-align: center;
      transition: color 300ms ease;
      padding: 6px 24px 0 24px;
      height: 100%;
      color: var(--lightText);

      &:hover {
        color: var(--orange);
      }

      &.active {
        color: var(--text);
        font-weight: 500;
        &:hover {
          color: var(--orange);
        }
      }
    }

    .hamburger {
      display: flex;
    }

    @media (min-width: 800px) {
      margin: 0 -24px 0 0;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .hamburger {
        display: none;
      }
    }
  }
`;

const DIV_MOBILE = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);
  top: 64px;
  position: absolute;
  z-index: 99;
  padding: 40px 0 0 0;
  margin: 0 -24px;
  opacity: 1;
  will-change: opacity;
  perspective: 1000;

  a {
    width: 100%;
    padding: 24px 0;
    position: relative;
    opacity: 0;
    color: var(--lightText);

    text-align: center;
    &:nth-child(1) {
      animation: linkFade 600ms ease-out forwards 200ms;
    }
    &:nth-child(2) {
      animation: linkFade 600ms ease-out forwards 350ms;
    }
    &:nth-child(3) {
      animation: linkFade 600ms ease-out forwards 500ms;
    }
    &:nth-child(4) {
      animation: linkFade 600ms ease-out forwards 650ms;
    }
    &:nth-child(5) {
      animation: linkFade 600ms ease-out forwards 800ms;
    }
    @keyframes linkFade {
      0% {
        opacity: 0;
        right: 40px;
      }

      100% {
        right: 0px;
        opacity: 1;
      }
    }
  }

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    transition: all 500ms ease-out;
    opacity: 0;
  }
`;

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Bio',
      path: '/bio',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Fees',
      path: '/fees',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  function handleClick(e) {
    console.log('clicked');
    if (menuOpen) {
      setMenuOpen(false);
      document.querySelector('body').classList.remove('frozen');
    } else {
      document.querySelector('body').classList.add('frozen');
      setMenuOpen(true);
    }
  }

  function isActive(link) {
    if (window.location.pathname === link.path) {
      return 'active';
    }
    return '';
  }

  return (
    <>
      <DIV_FULL>
        <div className='name'>
          <Link to='/'>Dr. Doyle Pruitt</Link>
        </div>
        <div className='links'>
          {routes.map((e) => {
            return (
              <Link key={e.path} to={e.path} className={isActive(e)}>
                {e.name}
              </Link>
            );
          })}
          <Hamburger click={handleClick} active={menuOpen} />
        </div>

        <CSSTransition
          in={menuOpen}
          nodeRef={nodeRef}
          timeout={500}
          classNames='fade'
          unmountOnExit
        >
          <DIV_MOBILE ref={nodeRef} className='mobile'>
            {routes.map((e) => {
              return (
                <Link
                  key={e.path}
                  to={e.path}
                  onClick={(event) => {
                    event.preventDefault();
                    document.querySelector('body').classList.remove('frozen');
                    navigate(e.path);
                    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
                  }}
                >
                  {e.name}
                </Link>
              );
            })}
          </DIV_MOBILE>
        </CSSTransition>
      </DIV_FULL>
    </>
  );
}
