import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

// the most outer wrapping container
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
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
  @media (min-width: 640px) {
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

const Image = (props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
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
      <Image src='https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg' />
      <Image src='https://doylepruitt.s3.us-east-2.amazonaws.com/porter.jpg' />
    </Container>
  );
};

export default ImagesFunc;
