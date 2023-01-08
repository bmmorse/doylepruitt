import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Arrow } from '../Globals/svg/arrow.svg';
import { useInView } from 'react-intersection-observer';

const DIV_FULL = styled.div`
  background: #f7f2ff;
  padding: 160px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-size: cover;
  background-color: var(--white);
  background-position: bottom center;
  position: relative;
  background-attachment: fixed;
  gap: 24px;
  border-bottom: solid 8px var(--text);

  svg {
    height: 48px;
    width: auto;
    opacity: 0;
    transition: opacity 500ms ease 0ms;

    path {
      fill: var(--orange);
    }
  }

  h2 {
    color: var(--text);
    text-align: center;
    position: relative;
    top: 40px;
    opacity: 0;
    transition: opacity 500ms ease 150ms, top 500ms ease 150ms;
  }

  .contactInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
    position: relative;
    top: 40px;
    opacity: 0;
    transition: opacity 500ms ease 300ms, top 500ms ease 300ms;

    span {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    p {
      text-align: center;
      color: var(--lightText);
    }

    @media (min-width: 480px) {
      span {
        flex-direction: row;
        gap: 24px;
      }
    }
  }

  &.fade {
    svg {
      opacity: 1;
    }

    h2 {
      top: 0px;
      opacity: 1;
    }

    .contactInfo {
      top: 0px;
      opacity: 1;
    }
  }
`;

export default function Footer() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
    rootMargin: '0% 0% 0% 0%',
  });

  return (
    <DIV_FULL ref={ref} className={inView ? 'fade' : ''}>
      <Arrow />
      <h2>I welcome you to contact me.</h2>
      <div className='contactInfo'>
        <span>
          <p>dpruittlcsw@gmail.com</p>
          <p>585-314-0321</p>
        </span>
        <p>243 Center St, Canandaigua, NY</p>
      </div>
    </DIV_FULL>
  );
}
