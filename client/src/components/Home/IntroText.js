import React from 'react';
import styled from 'styled-components';

const DIV_FULL = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const DIV_COLOR = styled.div`
  border-radius: 8px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 168, 157, 0.05) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  border-radius: 20px;
  margin: 0rem;
  width: 100%;
  z-index: 0;

  @media (min-width: 640px) {
    margin: 2rem;
  }

  @media (min-width: 1440px) {
    margin: 4rem;
  }
`;

const DIV_CONTENT = styled.div`
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (min-width: 640px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    margin: 12rem 0;
  }
`;

const DIV_DOYLE = styled.div`
  z-index: 10;
  max-width: 300px;
  flex: 0 1 auto;

  @media (min-width: 1024px) {
    max-width: 360px;
  }

  img {
    min-width: 290px;
    width: 100%;
    margin: 0 0 2rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.24);

    @media (min-width: 1024px) {
      margin: 0;
    }
  }
`;

const DIV_DIVIDER = styled.div`
  background: #c7e3e6;
  height: 1px;
  margin: 1.5rem 0 2rem 0;
  max-width: 512px;
  width: 100%;
`;

const DIV_TEXT = styled.div`
  align-items: flex-start;
  color: #6f6f6f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  flex: 0 1.5 auto;

  @media (min-width: 640px) {
    margin: 0 0 0 2rem;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 4rem;
  }

  @media (min-width: 1440px) {
    margin: 0 0 0 6rem;
  }

  h1 {
    font-weight: normal;
    font-size: 32px;
    margin: 0;
    line-height: 40px;
    max-width: 360px;
  }

  p {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 27px;
  }
`;

export default class IntroText extends React.Component {
  render() {
    return (
      <>
        <DIV_FULL>
          <DIV_COLOR>
            <DIV_CONTENT>
              <DIV_DOYLE>
                <img src='https://doylepruitt.s3.us-east-2.amazonaws.com/doyle.jpg' />
              </DIV_DOYLE>
              <DIV_TEXT>
                <h1>Psychotherapy grounded in hope, growth, and resilience.</h1>
                <DIV_DIVIDER />
                <p>
                  I believe my clients are the experts of their own lives, and
                  my role is to partner with them to discover what it is they
                  need to heal, grow, and achieve the life they imagined.
                </p>
                <p>
                  Since 2002 I have been a practicing therapist. At my private
                  practice in Canandaigua, NY, I work with individuals of all
                  ages who are looking to improve their lives and/or
                  relationships and folks seeking more fulfillment. I specialize
                  in the treatment of trauma across the lifespan, delinquency,
                  and youth in general.
                </p>
              </DIV_TEXT>
            </DIV_CONTENT>
          </DIV_COLOR>
        </DIV_FULL>
      </>
    );
  }
}
