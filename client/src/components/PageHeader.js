import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: #fcfcfc;
  padding: 80px 0;
  margin: 72px 0 0 0;
  background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg')
    no-repeat;
  background-size: cover;
  background-color: #072a43;
  background-position: center center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #1a1423d1;
    z-index: 0;
  }
`;

const DIV_MAXWIDTH = styled(max)`
  p {
    font-size: 12px;
    line-height: 16px;
  }

  h1 {
    font-size: 40px;
    line-height: 64px;
    color: var(--red);
  }
`;

export default function PageHeader() {
  let route = window.location.pathname.substring(1);
  route = route.charAt(0).toUpperCase() + route.slice(1);

  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <h1>{route}</h1>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
