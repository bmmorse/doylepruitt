import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Mobile from './Mobile';

const DIV_FULL = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  width: 100%;
  z-index: 90;
  transition: background 1s ease;

  &.white {
    background: white;
    box-shadow: 0px 2px 8px rgb(0 0 0 / 10%);
  }

  &.transparent {
    background: linear-gradient(
      180deg,
      rgba(136, 249, 255, 0.22) 0%,
      rgba(0, 82, 85, 0.37) 100%
    );
  }
`;

const UL_NAV = styled.ul`
  display: none;
  justify-content: center;
  max-width: 960px;
  width: 100%;

  li {
    align-items: baseline;
    list-style-type: none;
    width: 100%;

    &:last-child {
      margin: 0;
    }

    a {
      display: block;
      font-size: 0.75rem; // 12px
      line-height: 1rem;
      width: 100%;
      text-align: center;
      transition: all 1s ease;

      &.white {
        color: black;
        padding: 1rem 0;
      }

      &.transparent {
        color: white;
        padding: 2rem 0;
      }
    }
  }

  @media (min-width: 640px) {
    display: flex;
  }
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_is_white: false,
    };

    this.routes = [
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
      // {
      //   name: 'Scholarship',
      //   path: '/scholarship',
      // },
      // {
      //   name: 'Blog',
      //   path: '/blog',
      // },
      {
        name: 'Fees',
        path: '/fees',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ];
  }

  changeMenuColor = (e) => {
    if (window.scrollY > 0) {
      this.setState({ menu_is_white: true });
    } else {
      this.setState({ menu_is_white: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.changeMenuColor);
  }

  render() {
    return (
      <DIV_FULL className={this.state.menu_is_white ? 'white' : 'transparent'}>
        <UL_NAV>
          {this.routes.map((e) => {
            return (
              <li>
                <Link
                  to={e.path}
                  className={this.state.menu_is_white ? 'white' : 'transparent'}
                >
                  {e.name}
                </Link>
              </li>
            );
          })}
        </UL_NAV>
        <Mobile routes={this.routes} menu_is_white={this.state.menu_is_white} />
      </DIV_FULL>
    );
  }
}
