import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const slideFromRight = keyframes`
  from {
    left: 50px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
`;

const slideIMG = keyframes`
  from {
    left: -50px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
`;

const DIV_FULL = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10rem 2rem;
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }

  img {
    border-radius: 8px;
    max-width: 400px;
    min-width: 0;
    flex: 0 1.5 auto;
    z-index: 1;
    width: 100%;
    position: relative;
    opacity: 0;

    &.fade {
      animation: ${slideIMG} ease 750ms forwards;
    }

    @media (min-width: 1024px) {
      margin: 0;
    }
  }
`;

const DIV_DIVIDER = styled.div`
  background: #c7e3e6;
  height: 1px;
  margin: 22px 0 32px 0;
  width: 0;
  transition: 2000ms ease width;

  &.fade {
    width: 100%;
  }
`;

const DIV_TEXT = styled.div`
  flex: 0 3 100%;
  max-width: 640px;
  width: 100%;
  margin: 3rem 0 0 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin: 0 0 0 3rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0 auto;
    color: #002842;
    max-width: 420px;
    opacity: 0;
    position: relative;

    &.fade {
      animation: ${slideFromRight} ease 750ms forwards;
    }

    @media (min-width: 520px) {
      text-align: center;
    }

    @media (min-width: 1024px) {
      text-align: left;
      font-size: 2.5rem;
      max-width: 500px;
      margin: 0;
    }
  }

  p {
    margin-bottom: 21px;
    position: relative;
    opacity: 0;
    &.fade {
      animation: ${slideFromRight} ease 750ms forwards;
    }
  }
`;

/**
 * @prop {boolean} inView
 */

export default function IntroText() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <DIV_FULL>
      <img
        ref={ref}
        className={inView ? 'fade' : ''}
        src='https://doylepruitt.s3.us-east-2.amazonaws.com/doyle.jpg'
      />

      <DIV_TEXT>
        <h1 className={inView ? 'fade' : ''}>
          Psychotherapy grounded in hope, growth, and resilience.
        </h1>
        <DIV_DIVIDER className={inView ? 'fade' : ''} />
        <p className={inView ? 'fade' : ''}>
          I believe my clients are the experts of their own lives, and my role
          is to partner with them to discover what it is they need to heal,
          grow, and achieve the life they imagined.
        </p>
        <p className={inView ? 'fade' : ''}>
          Since 2002 I have been a practicing therapist. At my private practice
          in Canandaigua, NY, I work with individuals of all ages who are
          looking to improve their lives and/or relationships and folks seeking
          more fulfillment. I specialize in the treatment of trauma across the
          lifespan, delinquency, and youth in general.
        </p>
      </DIV_TEXT>
    </DIV_FULL>
  );
}
