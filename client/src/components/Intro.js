import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const DIV_INTRO = styled.div`
  padding: 160px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--white);

  h2 {
    text-align: center;
    color: var(--text);
    transition: opacity 800ms ease, bottom 800ms ease;
    margin: 0 0 24px 0;
    opacity: 0;
    bottom: -40px;
    position: relative;
  }

  p {
    transition: opacity 800ms ease 250ms, bottom 800ms ease 250ms;
    max-width: 800px;
    width: 100%;
    text-align: center;
    color: var(--text);
    opacity: 0;
    bottom: -40px;
    position: relative;
  }

  &.fade {
    h2 {
      opacity: 1;
      bottom: 0px;
    }
    p {
      opacity: 1;
      bottom: 0px;
    }
  }
`;

export default function Intro() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
  });

  return (
    <DIV_INTRO ref={ref} className={inView ? 'fade' : ''}>
      <h2>18 years of clinical experience</h2>

      <p>
        I believe my clients are the experts of their own lives, and my role is
        to partner with them to discover what it is they need to heal, grow, and
        achieve the life they imagined.
      </p>
    </DIV_INTRO>
  );
}
