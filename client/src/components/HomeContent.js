import React from 'react';
import styled from 'styled-components/macro';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const DIV_FULL = styled(full)`
  background-color: var(--white);
  padding-top: 240px;
  padding-bottom: 240px;
`;

const DIV_MAXWIDTH = styled(max)`
  gap: 240px;
`;

const DIV_INTRO = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
    margin: 0 0 120px 0;
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

const DIV_CARD = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 100;
    & > * {
      position: relative;
      opacity: 0;
      top: 24px;
    }

    h2 {
      margin: 0 0 16px 0;
      transition: opacity 500ms ease, top 500ms ease;
    }

    p {
      margin: 0 0 24px 0;
      text-align: center;
      transition: opacity 500ms ease 250ms, top 500ms ease 250ms;
      max-width: 640px;
    }

    a.linkButton {
      color: var(--text);
      border-color: var(--text);
      transition: opacity 500ms ease 500ms, top 500ms ease 500ms,
        color 500ms ease, border-color 500ms ease;
      &:hover {
        color: var(--red);
        border-color: var(--red);
      }
    }
  }

  .image {
    width: 100%;
    max-width: 480px;
    aspect-ratio: 4 / 3; /* ↔️ is double the ↕️ */

    background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/doyle.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px;
    bottom: 24px;
    position: relative;
    opacity: 0;
    transition: opacity 500ms ease, bottom 500ms ease;
    box-shadow: 0px 8px 182px 27px rgba(26, 20, 35, 0.14);

    &.office {
      background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg');
    }

    @media (min-width: 1156px) {
      max-width: none;
    }
  }

  &.fade {
    .content {
      & > * {
        opacity: 1;
        top: 0px;
      }
    }
    .image {
      opacity: 1;
      bottom: 0px;
    }
  }

  @media (min-width: 1156px) {
    flex-direction: row;
    gap: 80px;
    .image {
      max-width: 640px;
    }
    .content {
      order: 0;
      p {
        max-width: none;
      }
    }
  }
`;

export default function HomeContent() {
  function Intro() {
    const { ref, inView, entry } = useInView({
      threshold: [0, 0.5],
      root: null,
      rootMargin: '0% 0% 8% 0%',
    });

    return (
      <DIV_INTRO ref={ref} className={name(entry)}>
        <p>26 years of clinical experience</p>

        <p>
          I believe my clients are the experts of their own lives, and my role
          is to partner with them to discover what it is they need to heal,
          grow, and achieve the life they imagined.
        </p>
      </DIV_INTRO>
    );
  }

  let firstCard = (
    <>
      <div className='image office' />
      <div className='content'>
        <h2>My Services</h2>
        <p>
          I have extensive experience working with individuals and families
          coping with trauma, adversity, disturbance, and the stressors of daily
          life.
        </p>
        <Link to='/services' className='linkButton'>
          Learn More
        </Link>
      </div>
    </>
  );

  let secondCard = (
    <>
      <div className='content'>
        <h2>About Me</h2>
        <p>
          My goal with the client is to first establish safety and
          stabilization. Once this is achieved we can move towards exploring and
          understanding their trauma.
        </p>
        <Link to='/bio' className='linkButton'>
          Learn More
        </Link>
      </div>
      <div className='image' />
    </>
  );

  function name(entry) {
    if (entry && entry.intersectionRatio >= 0.5) {
      console.log(entry);
      return 'fade';
    } else if (entry && entry.intersectionRatio <= 0) {
      return '';
    } else if (entry && entry.target.classList.contains('fade')) {
      return 'fade';
    }
  }
  //entry && entry.target.classList.contains('fade')

  function Card(props) {
    const { ref, inView, entry } = useInView({
      threshold: [0, 0.5],
      root: null,
      rootMargin: '0%',
    });

    return (
      <DIV_CARD ref={ref} className={name(entry)}>
        {props.content}
      </DIV_CARD>
    );
  }

  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <Intro />
        <Card content={firstCard} />
        <Card content={secondCard} />
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
