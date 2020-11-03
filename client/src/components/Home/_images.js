import React from 'react';
import styled, { keyframes } from 'styled-components';
import VAR from '../VAR';
import { useInView } from 'react-intersection-observer';

// the most outer wrapping container
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${VAR.media640}) {
    grid-template-columns: 1fr 1fr;
  }
`;

// div that wraps each image
const ImageDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;

  @media (min-width: ${VAR.media640}) {
    padding: 0;
  }
`;

// the <img>
const ImageImg = styled.img`
  opacity: 0;
  position: relative;
  width: 100%;

  @keyframes imagesAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &.imagesAnimation {
    animation: imagesAnimation 1s ease;
    opacity: 1;
  }
`;

/**
 * Image Component - returns image inside a div wrapper
 * with intersection observer
 *
 * <Image src={VAR.images.office} />
 *
 * @props src
 *   link to the image, from VAR
 */

const Image = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <ImageDiv>
      <ImageImg
        ref={ref}
        className={inView ? 'imagesAnimation' : ''}
        src={props.src}
        alt=''
      />
    </ImageDiv>
  );
};

/**
 * The master component
 */
const ImagesFunc = () => {
  return (
    <Container>
      <Image src={VAR.images.office} />
      <Image src={VAR.images.porter} />
    </Container>
  );
};

export default ImagesFunc;
