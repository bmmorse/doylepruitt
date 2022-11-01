import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const DIV_INTRO = styled.div`
  padding: 160px 24px 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--white);
  p {
    opacity: 0;
    bottom: -16px;
    position: relative;
  }

  p:nth-child(1) {
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: var(--text);
    transition: opacity 500ms ease 250ms, bottom 500ms ease 250ms;
    margin: 0 0 40px 0;
    span {
      font-size: 14px;
      line-height: 24px;
      color: var(--red);
    }
  }

  p:nth-child(2) {
    transition: opacity 500ms ease 500ms, bottom 500ms ease 500ms;
    max-width: 800px;
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    font-weight: 500;
    color: var(--text);
    span {
      font-size: 24px;
      line-height: 36px;
      color: var(--red);
      font-weight: 500;
    }
  }

  &.fade {
    p {
      opacity: 1;
      bottom: 0px;
    }
  }

  @media (min-width: 720px) {
    p:nth-child(1) {
      width: 80%;
    }
  }
`;

export default function Intro() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
    rootMargin: '0% 0% 8% 0%',
  });

  return (
    <DIV_INTRO ref={ref} className={inView ? 'fade' : ''}>
      <p>18 years of clinical experience</p>

      <p>
        I believe my clients are the experts of their own lives, and my role is
        to partner with them to discover what it is they need to heal, grow, and
        achieve the life they imagined.
      </p>
    </DIV_INTRO>
  );
}
