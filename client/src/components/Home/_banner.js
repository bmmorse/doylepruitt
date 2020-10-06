import React from 'react';
import styled from 'styled-components';
import images from '../_images';
import VAR from '../VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)`
  background: url(${images.homeImage}) no-repeat;
  background-size: cover;
`;

const Container = styled(layout.container)`
  font-family: ${VAR.playfair};
  height: calc(100vh - 4rem);
  position: relative;
`;

const DoylePruitt = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 12rem 0 0 0;

  h1 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2rem;

    @media (min-width: ${VAR.media640}) {
      font-size: 4rem;
      line-height: 4rem;
    }
  }

  span {
    font-size: 1rem;
    padding: 0;
  }
`;

const BannerText = styled.div`
  bottom: 2rem;
  color: white;
  display: flex;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0%);
  z-index: 0;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1rem;

    &:nth-child(2) {
      padding: 0 0.5rem;
    }

    @media (min-width: ${VAR.media640}) {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`;
const Banner = () => {
  return (
    <FullWidth>
      <Container>
        <DoylePruitt>
          <h1>Doyle Pruitt</h1>
          <span>Ph.D. LCSW-R</span>
        </DoylePruitt>
        <BannerText>
          <h2>Hope.</h2>
          <h2>Growth.</h2>
          <h2>Resiliance.</h2>
        </BannerText>
      </Container>
    </FullWidth>
  );
};

export default Banner;
