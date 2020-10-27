import React from 'react';
import styled from 'styled-components';
import VAR from '../VAR';

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${VAR.media640}) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ImageWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: ${VAR.media640}) {
    padding: 0;
    // padding: 1rem;
    // padding-right: 0.5rem; // the left image

    &:nth-child(2) {
      // padding: 1rem;
      // padding-left: 0.5rem; // the right image
    }
  }
`;

const ImageFunc = () => {
  return (
    <Images>
      <ImageWrap>
        <img src={VAR.images.office} alt='' />
      </ImageWrap>
      <ImageWrap>
        <img src={VAR.images.porter} alt='' />
      </ImageWrap>
    </Images>
  );
};

export default ImageFunc;