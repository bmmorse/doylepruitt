import React from 'react';
import styled, { css, keyframes } from 'styled-components';

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
  height: ${(props) => props.height || '100vh'};
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

const DIV_TEXT = styled.div`
  align-items: center;
  animation: fade 500ms ease forwards 500ms;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 0;
  opacity: 0;
  position: relative;
  bottom: 5rem;

  @media (min-width: 640px) {
    bottom: 0rem;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  span.lcsw {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1;
    margin: 1rem 0 0 0;

    @media (min-width: 640px) {
      font-size: 1.5rem;
      margin: 20px 0 0 0;
    }
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: 900;
    line-height: 1;

    @media (min-width: 640px) {
      font-size: 24px;
    }
  }

  h1 {
    padding: 0;
    font-size: 2.4rem;
    line-height: 1;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

const DIV_DIVIDER_WRAPPER = styled.div`
  background: none;
  height: 1px;
  margin: 21px 0 27px 0;
  max-width: 12rem;
  width: 100%;
`;

const DIV_DIVIDER = styled.div`
  background: white;
  width: ${(props) => (props.slide ? '100%' : '0%')};
  height: 100%;
  transition: width 500ms ease 1000ms;
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
    };
  }

  render() {
    const HomeText = (
      <DIV_TEXT>
        <h1>Dr. Doyle Pruitt</h1>
        <span className='lcsw'>LCSW-R</span>
        <DIV_DIVIDER_WRAPPER>
          <DIV_DIVIDER slide={this.state.background_is_loaded} />
        </DIV_DIVIDER_WRAPPER>
        <p>Hope. Growth. Resilience.</p>
      </DIV_TEXT>
    );

    return (
      <DIV_FULL
        className='HEADER'
        background_is_loaded={this.state.background_is_loaded}
        height={this.props.height}
      >
        {this.props.height == '100vh' && HomeText}
      </DIV_FULL>
    );
  }
}
