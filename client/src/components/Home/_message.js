import React from 'react';
import styled from 'styled-components';
import images from '../_images';
import VAR from '../VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)``;

const Container = styled(layout.container)`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  padding: 12rem 1rem;

  @media (min-width: ${VAR.media640}) {
    font-size: 1.5rem;
    gap: 0 4rem;
    grid-template-columns: auto minmax(16rem, 1fr);
    line-height: 2.4rem;
  }
`;

const DoyleImg = styled.img`
  display: block;
  height: auto;
  max-width: 16rem;
  width: 100%;
  justify-self: center;
`;

const Text = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = () => {
  return (
    <FullWidth>
      <Container>
        <DoyleImg src={images.doyle}></DoyleImg>
        <Text>
          <h2>Finger Lakes Therapy</h2>
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
