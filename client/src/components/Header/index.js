import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Menu from './Menu/index';
import Content from './Content';

const DIV_FULL = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  animation: ${(props) => (props.background_is_loaded ? keyframes_mixin : '')};
  background: white;
  background: ${(props) =>
    props.background_is_loaded
      ? 'url("https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg") no-repeat'
      : ''};
  background-size: cover;
  height: ${(props) => (props.home_page ? '100vh' : '200px')};
  width: 100%;
  z-index: 1;
`;

const KEYFRAMES_FADE = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const keyframes_mixin = css`
  ${KEYFRAMES_FADE} 1000ms ease
`;

/**
 * @prop {boolean} home_page
 *   sets <Header/> styles, true for home page, false for other
 * @props {}
 */
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background_is_loaded: false,
    };
  }

  componentDidMount() {
    const img = new Image();
    img.src = 'https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg';
    img.onload = () => {
      this.setState({ background_is_loaded: true });
      console.log('good job');
    };
  }

  render() {
    return (
      <DIV_FULL
        className='HEADER'
        home_page={this.props.home_page}
        background_is_loaded={this.state.background_is_loaded}
      >
        <Content
          path={this.props.path}
          home_page={this.props.home_page}
          background_is_loaded={this.state.background_is_loaded}
        />
        <Menu className={this.state.background_is_loaded ? 'background' : ''} />
      </DIV_FULL>
    );
  }
}
