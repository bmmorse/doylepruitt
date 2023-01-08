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
  padding: 0 16px;
  position: relative;
  margin: 64px 0 0 0;
  height: calc(100vh - 64px);

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    /* height: 100vh; */
    height: 100%;
    left: 0;
    background: #282828;
    opacity: 0.6;
    /* z-index: 1000; */
  }

  &.fade {
    p {
      transition: opacity 650ms ease-out 400ms, top 650ms ease-out 400ms;
      opacity: 1;
      top: 0;
    }
    h1 {
      span:nth-child(1) {
        transition: opacity 650ms ease-out 550ms, top 650ms ease-out 550ms;
        opacity: 1;
        top: 0;
      }
      span:nth-child(2) {
        transition: opacity 650ms ease-out 700ms, top 650ms ease-out 700ms;
        opacity: 1;
        top: 0;
      }
      span:nth-child(3) {
        transition: opacity 650ms ease-out 850ms, top 650ms ease-out 850ms;
        top: 0;
        opacity: 1;
      }
    }
    a {
      transition: opacity 650ms ease-out 1000ms, top 650ms ease-out 1000ms,
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
    font-weight: 300;
    span {
      color: var(--orange);
      font-weight: 400;
    }

    @media (min-width: 370px) {
      max-width: none;
    }
  }

  h1 {
    color: inherit;
    margin: 24px 0 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      opacity: 0;
      position: relative;
      top: 40px;
      color: var(--white);
      &:nth-last-child(1) {
        color: var(--orange);
      }
    }

    @media (max-width: 600px) {
      margin: 24px 0 32px 0;
    }
  }

  a {
    opacity: 0;
    top: 40px;
    position: relative;
    margin: 0 0 10vh 0;
    &:hover {
      background: var(--orange);
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
      <Link className='linkButton' to='/contact'>
        Contact Me
      </Link>
    </DIV_FULL>
  );
}
