import React from 'react';
import styled from 'styled-components/macro';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';
import { Link } from 'react-router-dom';

const DIV_FULL = styled(full)`
  background: #f6f6f6;
  padding-top: 120px;
  padding-bottom: 120px;
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
  .image {
    width: 100%;
    aspect-ratio: 3/4; /* ↔️ is double the ↕️ */
    background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/porter.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 24px;
    border-radius: 2px;

    &.first {
      background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg');
    }

    @media (min-width: 640px) {
      aspect-ratio: 4/3; /* ↔️ is double the ↕️ */
    }
  }
  h3 {
    margin: 0 0 16px 0;
  }

  p {
    margin: 0 0 24px 0;
  }

  a.linkButton {
    color: var(--darkBlue);
    border-color: var(--darkBlue);
  }
`;

export default function HomeCards() {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <DIV_CARD>
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
        <DIV_CARD>
          <div className='image' />

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
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
