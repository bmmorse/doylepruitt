import React from 'react';
import styled from 'styled-components/macro';
import { MobileDropdownContext } from '../Globals/Context';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const DIV_FULL = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  background-color: red;
  position: fixed;
  top: 72px;
  z-index: 99;
  /* animation: changeBackground 500ms ease 0ms forwards; */
  &.my-node-enter {
    opacity: 0;
  }
  &.my-node-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  &.my-node-exit {
    opacity: 1;
  }
  &.my-node-exit-active {
    opacity: 0;
    transition: opacity 300ms;
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
    menuExpanded ? setMenuExpanded(false) : setMenuExpanded(true);
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
