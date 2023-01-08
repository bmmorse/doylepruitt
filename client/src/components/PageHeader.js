import React from 'react';
import styled from 'styled-components';

const DIV_FULL = styled.div`
  background: #fcfcfc;
  padding: 80px 0;
  margin: 64px 0 0 0;
  background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg')
    no-repeat;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  display: flex;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--skyblue);
    opacity: 0.6;
    z-index: 0;
  }

  h1 {
    color: var(--white);
  }
`;

export default function PageHeader({ title }) {
  return (
    <DIV_FULL>
      <h1>{title}</h1>
    </DIV_FULL>
  );
}
