import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: #fcfcfc;
  padding: 0 24px;
  height: calc(100vh - 72px);
  margin: 72px 0 0 0;
  background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg')
    no-repeat;
  background-size: cover;
  background-color: #072a43;
  background-position: center center;
  position: relative;
  align-items: flex-start;
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
  align-items: center;
  padding: 80px 0 0 0;
  .contactInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  h1 {
    color: var(--red);
    text-align: center;
    margin: 40px 0;
    font-size: 24px;
    line-height: 32px;
  }
  p {
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 40px 0;
    color: var(--white);
    text-align: center;
    &:nth-last-child(1) {
      margin: 0;
    }
  }

  @media (min-width: 1080px) {
    h1 {
      margin: 0 0 40px 0;
    }
    .contactInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    p {
      margin: 0 80px 0 0;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
`;

export default function Contact() {
  let route = window.location.pathname.substring(1);
  route = route.charAt(0).toUpperCase() + route.slice(1);

  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <h1>Contact Me</h1>
        <div className='contactInfo'>
          <p>dpruittlcsw@gmail.com</p>
          <p>585-314-0321</p>
          <p>243 Center St, Canandaigua, NY</p>
        </div>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
