import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const DIV_FULL = styled.div`
  align-items: center;
  animation: ${(props) => (props.background_is_loaded ? keyframes_mixin : '')};
  background: white;
  background: ${(props) =>
    props.background_is_loaded
      ? 'url("https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg") no-repeat'
      : ''};
  background-size: cover;
  color: hsla(168, 100%, 98%, 1);
  display: flex;
  height: ${(props) => props.height || '100vh'};
  justify-content: center;
  position: relative;
  width: 100%;
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
  color: rgba(255, 255, 255, 0.9);
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
    line-height: 1;
    margin: 1rem 0 0 0;
    color: inherit;

    @media (min-width: 640px) {
      font-size: 1.5rem;
      margin: 20px 0 0 0;
    }
  }

  p {
    color: white;
    font-size: 16px;
    line-height: 1;
    font-family: 'NHRegular';

    @media (min-width: 640px) {
      font-size: 24px;
    }
  }

  h1 {
    color: inherit;
    font-size: 3rem;
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
      document.fonts.ready.then(() => {
        this.setState({ background_is_loaded: true });
      });
    };
  }

  render() {
    return (
      <DIV_FULL
        className='HEADER'
        background_is_loaded={this.state.background_is_loaded}
      >
        <DIV_TEXT>
          <h1>Dr. Doyle Pruitt</h1>
          <span className='lcsw'>LCSW-R</span>
          <DIV_DIVIDER_WRAPPER>
            <DIV_DIVIDER slide={this.state.background_is_loaded} />
          </DIV_DIVIDER_WRAPPER>
          <p>Hope. Growth. Resilience.</p>
        </DIV_TEXT>
      </DIV_FULL>
    );
  }
}
