import React from 'react';
import styled from 'styled-components';

const DIV_FULL = styled.div`
  align-items: center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  padding: 10rem 2rem;
  position: relative;
  width: 100%;

  @media (min-width: 800px) {
    align-items: start;
    flex-direction: row;
    justify-content: center;
  }
`;

const IMG_DOYLE = styled.img`
  border-radius: 8px;
  max-width: 400px;
  min-width: 0;
  flex: 0 1.5 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 1;
  width: 100%;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const DIV_DIVIDER = styled.div`
  background: #c7e3e6;
  height: 1px;
  margin: 22px 0 25px 0;
  width: 100%;
`;

const DIV_TEXT = styled.div`
  flex: 0 3 100%;
  max-width: 640px;
  padding: 5em 0;
  width: 100%;

  @media (min-width: 800px) {
    padding: 3rem 0 0 3rem;
  }

  h1 {
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    margin: 0;
    color: #002842;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }
`;

export default class IntroText extends React.Component {
  render() {
    return (
      <DIV_FULL>
        <IMG_DOYLE src='https://doylepruitt.s3.us-east-2.amazonaws.com/doyle.jpg' />

        <DIV_TEXT>
          <h1>Psychotherapy grounded in hope, growth, and resilience.</h1>
          <DIV_DIVIDER />
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
        </DIV_TEXT>
      </DIV_FULL>
    );
  }
}
