import React from 'react';
import styled from 'styled-components/macro';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const DIV_FULL = styled(full)`
  padding-top: 80px;
  background-color: var(--white);
`;

const DIV_MAXWIDTH = styled(max)`
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 80px;
  }
`;

const DIV_CARD = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:nth-child(1) {
    margin: 0 0 80px 0;
    @media (min-width: 640px) {
      margin: 0;
    }
  }

  & > * {
    position: relative;
    opacity: 0;
    top: 16px;
  }

  .image {
    width: 100%;
    aspect-ratio: 3/4; /* ↔️ is double the ↕️ */
    background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/porter.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 32px;
    border-radius: 2px;

    &.first {
      background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg');
    }

    @media (min-width: 640px) {
      aspect-ratio: 16 / 9; /* ↔️ is double the ↕️ */
    }
  }

  h3 {
    margin: 0 0 16px 0;
  }

  p {
    margin: 0 0 24px 0;
    /* padding: 0 24px; */
  }

  a.linkButton {
    color: var(--darkBlue);
    border-color: #c5d7e8;
  }

  &.fade {
    & > * {
      opacity: 1;
      top: 0;
    }
    .image {
      transition: opacity 600ms ease-out 400ms, 800ms top 400ms ease-out;
    }
    h3 {
      transition: opacity 600ms ease-out 600ms, 800ms top 600ms ease-out;
    }
    p {
      transition: opacity 600ms ease-out 800ms, 800ms top 800ms ease-out;
    }
    a.linkButton {
      transition: opacity 600ms ease-out 1000ms, 800ms top 1000ms ease-out;
    }
  }
`;

export default function HomeCards() {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <DIV_CARD ref={ref} className={inView ? 'fade' : ''}>
          <div className='image first' />

          <h3>My Services</h3>
          <p>
            I believe my clients are the experts of their own lives, and my role
            is to partner with them to discover what it is they need to heal,
            grow, and achieve the life they imagined.
          </p>
          <Link to='/services' className='linkButton'>
            Learn More
          </Link>
        </DIV_CARD>
        <DIV_CARD ref={ref} className={inView ? 'fade' : ''}>
          <div className='image' />

          <h3>About Me</h3>
          <p>
            I believe my clients are the experts of their own lives, and my role
            is to partner with them to discover what it is they need to heal,
            grow, and achieve the life they imagined.
          </p>
          <Link to='/bio' className='linkButton'>
            Learn More
          </Link>
        </DIV_CARD>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
