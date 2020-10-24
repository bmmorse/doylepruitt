import React from 'react';
import styled from 'styled-components';
import VAR from '../VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)`
  background: url(${VAR.images.homeImage}) no-repeat;
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
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;

    @media (min-width: ${VAR.media640}) {
      font-size: 4rem;
      line-height: 4rem;
    }
  }

  span {
    font-size: 1rem;
    padding: 0.5rem 0 0 0;
  }
`;

const BannerText = styled.div`
  bottom: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  left: 50%;
  padding: 0 1rem;
  position: absolute;
  text-align: center;
  transform: translate(-50%, 0%);
  width: 100%;
  z-index: 0;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;

    &:nth-child(2) {
      padding: 0 1rem;
    }

    @media (min-width: ${VAR.media640}) {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    @media (min-width: ${VAR.media1024}) {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }
`;
const Banner = () => {
  return (
    <FullWidth>
      <Container>
        <DoylePruitt>
          <h1>Dr. Doyle Pruitt</h1>
          <span>LCSW-R</span>
        </DoylePruitt>
        <BannerText>
          <h2>Hope. Growth. Resilience.</h2>
        </BannerText>
      </Container>
    </FullWidth>
  );
};

export default Banner;
