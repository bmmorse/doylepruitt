import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
import { MobileDropdownContext } from '../Globals/Context';
import Hamburger from './Hamburger';
import { CSSTransition } from 'react-transition-group';

const DIV_FULL = styled.div`
  position: fixed;
  height: 72px;
  z-index: 900;
  background: var(--white);
  /* padding: 0 max(calc((100vw - 480px) / 2), 24px) 0
    max(calc((100vw - 480px) / 2), 24px); */
  padding: 0 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    a {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      margin: 0 8px 0 0;
    }
    span:nth-child(2) {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: none;

      @media (min-width: 440px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  @media (min-width: 840px) {
    padding: 0 max(calc((100vw - 1368px) / 2), 80px) 0
      max(calc((100vw - 1368px) / 2), 80px);
  }
`;

const DIV_NAV = styled.div`
  justify-content: center;
  display: flex;
  margin: 0 -24px 0 0;

  a {
    display: none;
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    text-align: center;
    transition: color 300ms ease;
    padding: 24px;

    &:hover {
      color: var(--sunset3);
    }
  }

  .hamburger {
    display: flex;
  }

  @media (min-width: 840px) {
    a {
      display: block;
    }
    .hamburger {
      display: none;
    }
  }
`;

const DIV_MOBILE = styled.div`
  height: calc(100vh - 72px);
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);
  transition: opacity 500ms ease;
  top: 72px;
  position: absolute;
  z-index: 99;
  opacity: 0;
  padding: 24% 0 0 0;
  margin: 0 -24px;

  a {
    font-size: 24px;
    line-height: 32px;
    width: 100%;
    text-align: center;
    padding: 24px 0;
  }

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter.fade-enter-active {
    transition: opacity 500ms ease-out;
    opacity: 1;
  }
  &.fade-enter-done {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
  }
`;

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nodeRef = useRef(null);
  const history = useHistory();
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

  return (
    <>
      <DIV_FULL>
        <div className='name'>
          <Link to='/'>Dr. Doyle Pruitt</Link>
          {/* <span>Ph.D., LCSW-R</span> */}
        </div>
        <DIV_NAV>
          {routes.map((e) => {
            return (
              <Link key={e.path} to={e.path}>
                {e.name}
              </Link>
            );
          })}
          <Hamburger click={handleClick} active={menuOpen} />
        </DIV_NAV>
        <CSSTransition
          in={menuOpen}
          nodeRef={nodeRef}
          timeout={500}
          classNames='fade'
          unmountOnExit
        >
          <DIV_MOBILE ref={nodeRef}>
            {routes.map((e) => {
              return (
                <Link
                  key={e.path}
                  to={e.path}
                  onClick={(event) => {
                    event.preventDefault();
                    document.querySelector('body').classList.remove('frozen');
                    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
                    history.push(e.path);
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
