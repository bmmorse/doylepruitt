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

  &.page-top {
    background: linear-gradient(
        180deg,
        rgba(136, 249, 255, 0.22) 0%,
        rgba(0, 82, 85, 0.37) 100%
      ),
      url('https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg')
        no-repeat;
    background-size: cover;
    background-position: 10% 10%;
  }

  &.scroll {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 8px rgb(0 0 0 / 10%);
  }

  &.home-top {
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
      font-size: 12px;
      width: 100%;
      text-align: center;
      transition: all 1s ease;

      &.white {
        color: #242729;
        padding: 2rem 0;
      }

      &.transparent {
        color: rgba(255, 255, 255, 0.8);
        padding: 2rem 0;
      }
    }
  }

  @media (min-width: 640px) {
    display: flex;
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
      this.setState({ isScrolling: true });
    } else {
      this.setState({ isScrolling: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.changeMenuColor);
  }

  render() {
    const { isScrolling } = this.state;
    const { onHomepage } = this.props;
    const getClassName = () => {
      if (onHomepage && !isScrolling) {
        return 'home-top';
      }
      if (onHomepage && isScrolling) {
        return 'scroll';
      }
      if (!onHomepage && !isScrolling) {
        return 'page-top';
      }
      if (!onHomepage && isScrolling) {
        return 'scroll';
      }
    };
    return (
      <DIV_FULL className={getClassName()}>
        <UL_NAV>
          {this.routes.map((e) => {
            return (
              <li>
                <Link
                  to={e.path}
                  className={isScrolling ? 'white' : 'transparent'}
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
