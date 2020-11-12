import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes, css } from 'styled-components';
import VAR from '../../helpers/VAR';
import layout from '../_layout';

/**
 * Layout
 */
const FullWidth = styled(layout.full)``;

const Container = styled(layout.container)`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  margin: 12rem 0;
  padding: 0 1rem;

  @media (min-width: ${VAR.media640}) {
    font-size: 1.5rem;
    gap: 0 4rem;
    grid-template-columns: auto minmax(16rem, 1fr);
    line-height: 2.4rem;
  }
`;

/**
 * Doyle Image
 */

const DoyleImg = styled.img`
  display: block;
  height: auto;
  justify-self: center;
  max-width: 16rem;
  opacity: 0;
  width: 100%;

  @keyframes doyleAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &.doyleAnimation {
    animation: doyleAnimation 1s ease;
    opacity: 1;
  }
`;

const DoyleFunc = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <DoyleImg
      className={inView ? 'doyleAnimation' : ''}
      ref={ref}
      src={VAR.images.doyle}
    />
  );
};

const Text = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: 0;
  width: 100%;

  @keyframes doyleAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &.doyleAnimation {
    animation: doyleAnimation 1s ease;
    opacity: 1;
  }

  &.doyleAnimation {
    animation: doyleAnimation 1s ease;
    opacity: 1;
  }
`;

const Content = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    // triggerOnce: true,
  });

  return (
    <FullWidth>
      <Container>
        <DoyleFunc />
        <Text ref={ref} className={inView ? 'doyleAnimation' : ''}>
          <h2>Psychotherapy grounded in hope, growth, and resilience.</h2>
          <p>
            I believe my clients are the experts of their own lives, and my role
            is to partner with them to discover what it is they need to heal,
            grow, and achieve the life they imagined.
          </p>
          <p>
            Since 2002 I have been a practicing therapist. At my private
            practice in Canandaigua, NY, I work with individuals of all ages who
            are looking to improve their lives and/or relationships and folks
            seeking more fulfillment. I specialize in the treatment of trauma
            across the lifespan, delinquency, and youth in general.
          </p>
        </Text>
      </Container>
    </FullWidth>
  );
};

export default Content;
