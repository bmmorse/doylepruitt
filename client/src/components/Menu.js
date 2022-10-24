import React from 'react';
import styled from 'styled-components/macro';
import { MobileDropdownContext } from '../Globals/Context';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

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
    transition: opacity 300ms ease-in;
    opacity: 1;
  }
  &.my-node-exit {
    opacity: 1;
  }
  &.my-node-exit.my-node-exit-active {
    transition: opacity 300ms ease-in;
    opacity: 0;
  }
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inProp: false,
    };
    this.nodeRef = React.createRef();
  }

  handleClick = (e) => {
    document.querySelector('body').classList.remove('frozen');
    const { menuExpanded, setMenuExpanded } = this.context;
    setTimeout(() => {
      menuExpanded ? setMenuExpanded(false) : setMenuExpanded(true);
    }, 0);
  };

  render() {
    let menuExpanded = this.context.menuExpanded;

    return (
      <CSSTransition
        in={menuExpanded}
        nodeRef={this.nodeRef}
        timeout={300}
        classNames='my-node'
        unmountOnExit
      >
        <DIV_FULL ref={this.nodeRef}>
          {this.context.routes.map((e) => {
            return (
              <Link onClick={this.handleClick} key={e.path} to={e.path}>
                {e.name}
              </Link>
            );
          })}
        </DIV_FULL>
      </CSSTransition>
    );
  }
}

Menu.contextType = MobileDropdownContext;
