import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MobileDropdownContext } from '../Globals/Context';

const DIV_FULL = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  height: 72px;
  width: 100%;
  z-index: 90;
  transition: background 1s ease;
  background: white;
  padding: 0 0 0 24px;
`;

const DIV_MAXWIDTH = styled.div`
  max-width: 1368px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const DIV_NAME = styled.div`
  font-family: var(--sans);
  span:nth-child(1) {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin: 0 8px 0 0;
  }
  span:nth-child(2) {
    letter-spacing: -0.02em;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    @media (min-width: 440px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const DIV_NAV = styled.div`
  justify-content: center;
  display: flex;
  a {
    display: none;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    text-align: center;
    transition: color 300ms ease;
    color: var(--grey20);
    padding: 24px;

    &:hover {
      color: red;
    }
  }

  button {
    display: block;
    font-size: 16px;
    line-height: 24px;
    padding: 24px;
  }

  @media (min-width: 800px) {
    a {
      display: block;
    }
    button {
      display: none;
    }
  }
`;

/**
 * @prop {boolean} onHomepage | true, if on the homepage
 */
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
    };
  }

  handleClick = (e) => {
    const { menuExpanded, setMenuExpanded } = this.context;
    if (menuExpanded) {
      setMenuExpanded(false);
    } else {
      setMenuExpanded(true);
    }
  };

  render() {
    return (
      <>
        <DIV_FULL>
          <DIV_MAXWIDTH>
            <DIV_NAME>
              <span>Dr. Doyle Pruitt</span>
              <span>Ph.D., LCSW-R</span>
            </DIV_NAME>
            <DIV_NAV>
              {this.context.routes.map((e) => {
                return (
                  <Link key={e.path} to={e.path}>
                    {e.name}
                  </Link>
                );
              })}
              <button onClick={this.handleClick}>click</button>
            </DIV_NAV>
          </DIV_MAXWIDTH>
        </DIV_FULL>
      </>
    );
  }
}
Menu.contextType = MobileDropdownContext;
