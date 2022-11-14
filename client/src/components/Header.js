import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const DIV_FULL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg')
    no-repeat;
  background-size: cover;
  background-color: #072a43;
  background-position: center center;
  padding: 0 24px;
  position: relative;
  margin: 80px 0 0 0;
  height: calc(100vh - 80px);

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    /* height: 100vh; */
    height: 100%;
    left: 0;
    background: linear-gradient(180deg, #1a1423 0%, #31273d 100%);
    opacity: 0.8;
    /* z-index: 1000; */
  }
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
        background 400ms ease-out, color 400ms ease-out;
      opacity: 1;
      top: 0;
    }
  }

  p {
    position: relative;
    opacity: 0;
    top: 16px;
    color: var(--white);
    text-align: center;
    span {
      color: var(--sunset5);
    }
  }

  h1 {
    color: inherit;
    margin: 16px 0 32px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
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
    padding: 15px 23px;
    opacity: 0;
    top: 40px;
    position: relative;
    color: var(--sunset5);
    border: solid 1px var(--sunset5);
    border-radius: 4px;
    margin: 0 0 10vh 0;
    &:hover {
      background: var(--sunset5);
      color: var(--text);
    }
  }
`;

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  return (
    <DIV_FULL ref={ref} className={inView ? 'fade' : ''}>
      <p>
        <span>Psychotherapy</span> in the Finger Lakes
      </p>
      <h1>
        <span>Hope.</span>
        <span>Growth.</span>
        <span>Resilience.</span>
      </h1>
      <Link to='/contact'>Contact Me</Link>
    </DIV_FULL>
  );
}
