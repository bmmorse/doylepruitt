import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const DIV_FULL = styled(full)`
  align-items: center;
  background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg')
    no-repeat;
  background-size: cover;
  background-color: #072a43;
  background-position: center center;
  height: 100vh;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    background: linear-gradient(180deg, #1a1423 0%, #31273d 100%);
    opacity: 0.8;
    /* z-index: 1000; */
  }
`;

const DIV_TEXT = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 100;

  &.fade {
    & > * {
    }
    p {
      transition: opacity 600ms ease-out 600ms, top 800ms ease-out 600ms;
      opacity: 1;
      top: 0;
    }
    h1 {
      span:nth-child(1) {
        transition: opacity 800ms ease-out 400ms, top 800ms ease-out 400ms;
        opacity: 1;
        top: 0;
      }
      span:nth-child(2) {
        transition: opacity 800ms ease-out 700ms, top 800ms ease-out 700ms;
        opacity: 1;
        top: 0;
      }
      span:nth-child(3) {
        transition: opacity 800ms ease-out 1000ms, top 800ms ease-out 1000ms;
        top: 0;
        opacity: 1;
      }
    }
    a {
      transition: opacity 800ms ease-out 1000ms, top 800ms ease-out 1000ms,
        border-color 400ms ease-out, color 400ms ease-out;
      opacity: 1;
      top: 0;
      &:hover {
        border-color: #fbfbf2;
        color: #fbfbf2;
      }
    }
  }

  p {
    color: inherit;
    font-size: 16px;
    line-height: 24px;
    position: relative;
    opacity: 0;
    top: 16px;
    color: var(--white);
    span {
      font-size: 16px;
      line-height: 24px;
      color: var(--sunset5);
    }
  }

  h1 {
    color: inherit;
    margin: 24px 0 32px 0;
    span {
      font-size: 40px;
      line-height: 56px;
      opacity: 0;
      position: relative;
      top: 40px;
      color: var(--white);
      &:nth-last-child(1) {
        color: var(--sunset5);
      }
    }
  }

  a {
    opacity: 0;
    top: 40px;
    position: relative;
    color: var(--sunset5);
    border-color: var(--sunset5);
  }
  @media (min-width: 540px) {
    h1 {
      span {
        font-size: 64px;
        line-height: 80px;
      }
    }
  }
`;

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  return (
    <DIV_FULL>
      <DIV_TEXT ref={ref} className={inView ? 'fade' : ''}>
        <p>
          <span>Psychotherapy</span> in the Finger Lakes
        </p>
        <h1>
          <span>Hope. </span>
          <span>Growth. </span>
          <span>Resilience.</span>
        </h1>
        <Link to='/contact' className='linkButton'>
          Contact Me
        </Link>
      </DIV_TEXT>
    </DIV_FULL>
  );
}

// componentDidMount() {
//   const img = new Image();
//   img.src = 'https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg';
//   img.onload = () => {
//     document.fonts.ready.then(() => {
//       this.setState({ background_is_loaded: true });
//     });
//   };
// }

// const Image = (props) => {
//   const { ref, inView } = useInView({
//     threshold: 0.4,
//     triggerOnce: true,
//   });
//   return (
//     <ImageDiv>
//       <img
//         ref={ref}
//         className={inView ? 'imagesAnimation' : ''}
//         src={props.src}
//         alt=''
//       />
//     </ImageDiv>
//   );
// };
