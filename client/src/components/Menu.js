import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';
import { Link, useHistory } from 'react-router-dom';

const DIV_FULL = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 72px;
  z-index: 99;
  padding-top: 80px;
  a {
    font-size: 24px;
    line-height: 32px;
    width: 100%;
    text-align: center;
    padding: 16px 0;
  }

  /* animation: changeBackground 500ms ease 0ms forwards; */
  &.my-node-enter {
    opacity: 0;
  }
  &.my-node-enter.my-node-enter-active {
    transition: opacity 500ms ease-out;
    opacity: 1;
  }
  &.my-node-exit {
    opacity: 1;
  }
  &.my-node-exit.my-node-exit-active {
    transition: opacity 500ms ease-out;
    opacity: 0;
  }
`;

export default function Menu() {
  const [inProp, setInProp] = useState(false);
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

  return (
    <CSSTransition
      // in={menuExpanded}
      nodeRef={nodeRef}
      timeout={500}
      classNames='my-node'
    >
      <DIV_FULL ref={nodeRef}>
        {routes.map((e) => {
          return (
            <Link
              onClick={(event) => {
                event.preventDefault();
                document.querySelector('body').classList.remove('frozen');
                // const { menuExpanded, setMenuExpanded } = context;
                // menuExpanded ? setMenuExpanded(false) : setMenuExpanded(true);
                history.push(e.path);
              }}
              key={e.path}
              to={e.path}
            >
              {e.name}
            </Link>
          );
        })}
      </DIV_FULL>
    </CSSTransition>
  );
}
