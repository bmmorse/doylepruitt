import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function transition(name) {
  return `
    &.${name}-enter {
      display: block;
      height: 0px;
    }
    &.${name}-enter-active {
      height: calc(100vh - 48px);
      transition: height 200ms;
    }
    &.${name}-enter-done {
      height: calc(100vh - 48px);
      display: block;
    }
    &.${name}-exit {
      height: calc(100vh - 48px);
      display: block;
    }

    &.${name}-exit-active {
      height: 0px;
      transition: height 200ms 200ms;
    }
  `;
}

const DIV_MOBILE_MENU = styled.div`
  color: ${(props) => (props.menu_is_white ? 'black' : 'white')};
  display: flex;
  padding: 2rem 0;
  position: relative;
  justify-content: center;
  transition: color 200ms ease;
  width: 100%;

  span {
    color: #5eb2bc;
    line-height: 1;
    font-size: 12px;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

const DIV_HIDDEN = styled.div`
  background: #ffead6;
  display: none;
  padding: 0 1rem;
  position: absolute;
  top: 76px;
  width: 100%;
  ${transition('show')}
`;

const UL_MOBILE = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 2rem 0 0 0;
  width: 100%;
  opacity: 0;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &.ul-entering {
    animation: fadein 400ms ease forwards 200ms;
  }
  &.ul-entered {
    opacity: 1;
  }
  &.ul-exiting {
    opacity: 0;
    animation: fadeout 400ms ease backwards;
  }
  &.ul-exited {
    opacity: 0;
  }

  li {
    border-radius: 8px;
    margin: 0 0 1rem 0;

    background: #ffd1a8;

    a {
      color: #242729;
      display: block;
      font-size: 1rem;
      text-align: center;
      width: 100%;
      padding: 1rem;
    }
  }
`;

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown_is_displayed: false,
    };
  }

  componentDidMount() {
    this.targetElement = document.querySelector('.hidden');
  }

  handleClick = () => {
    if (!this.state.dropdown_is_displayed) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = 'auto';
    }
    this.setState({ dropdown_is_displayed: !this.state.dropdown_is_displayed });
  };

  render() {
    return (
      <DIV_MOBILE_MENU
        onClick={this.handleClick}
        menu_is_white={this.props.menu_is_white}
      >
        <span>Menu</span>
        <CSSTransition
          in={this.state.dropdown_is_displayed}
          timeout={600}
          classNames='show'
          unmountOnExit
        >
          {(state) => (
            <DIV_HIDDEN>
              <UL_MOBILE className={`ul-${state}`}>
                {this.props.routes.map((e) => (
                  <li>
                    <Link to={e.path}>{e.name}</Link>
                  </li>
                ))}
              </UL_MOBILE>
            </DIV_HIDDEN>
          )}
        </CSSTransition>
      </DIV_MOBILE_MENU>
    );
  }
}
