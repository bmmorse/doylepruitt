import React from 'react';
import styled from 'styled-components';
import VAR from '../VAR';
import layout from '../_layout';
import images from '../_images';

const FullWidth = styled(layout.full)`
  background: url(${images.homeImage}) no-repeat;
  background-size: cover;
`;

const Container = styled(layout.container)`
  align-items: flex-end;
  display: flex;
  height: 12rem;
  max-width: ${VAR.media640};

  h1 {
    color: white;
    font-size: 3rem;
    padding: 0 0 2rem 0;
  }

  @media (min-width: ${VAR.media640}) {
    padding: 0;
  }
`;

const Banner = (props) => {
  return (
    <FullWidth>
      <Container>
        <h1>{props.children}</h1>
      </Container>
    </FullWidth>
  );
};

export default Banner;
