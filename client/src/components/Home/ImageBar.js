import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const DIV_FULL = styled.div`
  background: #5eb2bc;
  background-image: linear-gradient(180deg, #98d5da 0%, #5eb2bc 100%);
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  padding: 5rem 1rem;

  @media (min-width: 640px) {
    padding: 5rem 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 10rem 2rem;
  }
`;

const ImageDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

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
    <DIV_FULL>
      <Image src='https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg' />
      <Image src='https://doylepruitt.s3.us-east-2.amazonaws.com/porter.jpg' />
    </DIV_FULL>
  );
};

export default ImagesFunc;
