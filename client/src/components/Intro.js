import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import underline from '../Globals/svg/underline.svg';
import { ReactComponent as Squiggle } from '../Globals/svg/squiggle.svg';

const DIV_INTRO = styled.div`
  padding: 160px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--white);

  svg {
    opacity: 0;
    transition: opacity 500ms ease;
    height: 24px;
    width: auto;
  }

  h2 {
    text-align: center;
    color: var(--text);
    transition: opacity 500ms ease, bottom 500ms ease;
    margin: 40px 0 32px 0;
    opacity: 0;
    bottom: -40px;
    position: relative;

    span {
      background: url(${underline}) no-repeat;
      background-position: bottom center;
      z-index: 200;
      background-size: 100%;
      width: 100%;
      height: 100%;
    }
  }

  p {
    transition: opacity 500ms ease 150ms, bottom 500ms ease 150ms;
    max-width: 720px;
    width: 100%;
    text-align: center;
    color: var(--lightText);
    opacity: 0;
    bottom: -40px;
    position: relative;
  }

  &.fade {
    svg {
      opacity: 1;
    }

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
    rootMargin: '0px 0px 0% 0px',
  });

  function observerClassNames(entry) {
    if (entry === undefined) {
      return;
    }

    const { intersectionRatio, isIntersecting } = entry;

    if (intersectionRatio >= 0.5 && isIntersecting) {
      return 'fade';
    }
  }

  return (
    <DIV_INTRO ref={ref} className={observerClassNames(entry)}>
      <Squiggle />

      <h2>
        <span>20+ years</span> of clinical experience
      </h2>

      <p>
        I believe my clients are the experts of their own lives, and my role is
        to partner with them to discover what it is they need to heal, grow, and
        achieve the life they imagined.
      </p>
    </DIV_INTRO>
  );
}
