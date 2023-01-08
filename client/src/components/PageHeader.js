import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: #fcfcfc;
  padding: 80px 0;
  margin: 64px 0 0 0;
  background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg')
    no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: var(--skyblue);
    opacity: 0.94;
    z-index: 0;
  }
`;

const DIV_MAXWIDTH = styled(max)`
  p {
    font-size: 12px;
    line-height: 16px;
  }

  h2 {
    color: var(--white);
  }
`;

export default function PageHeader({ title }) {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <h2>{title}</h2>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
