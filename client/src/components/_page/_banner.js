import React from 'react';
import styled from 'styled-components';
import VAR from '../VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)`
  background: url(${VAR.images.homeImage}) no-repeat;
  background-size: cover;
`;

const Container = styled(layout.container)`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: ${VAR.playfair};
  height: 8rem;
  justify-content: center;
  max-width: ${VAR.media640};

  .doyle {
    font-size: 2rem;
    line-height: 2rem;
  }

  .phd {
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.5rem 0 0 0;
  }
`;

const Banner = (props) => {
  return (
    <FullWidth>
      <Container>
        <span className='doyle'>Doyle Pruitt</span>
        <span className='phd'>Ph.D. LCSW-R</span>
      </Container>
    </FullWidth>
  );
};

export default Banner;
