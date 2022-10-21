import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  padding-top: 120px;
  padding-bottom: 120px;
  background: #f8fa90;
`;
const DIV_MAXWIDTH = styled(max)`
  p.large {
    width: 80%;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    font-weight: 500;
    color: var(--darkBlue);
    opacity: 0;
    bottom: -16px;
    position: relative;

    &.fade {
      transition: 600ms opacity ease-out, 600ms bottom 200ms ease-out;
      opacity: 1;
      bottom: 0px;
    }
  }

  p.small {
    color: var(--red);
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin: 40px 0 0 0;
    opacity: 0;
    bottom: -16px;
    position: relative;
    &.fade {
      transition: 600ms opacity 400ms ease-out, 600ms bottom 400ms ease-out;
      opacity: 1;
      bottom: 0px;
    }
  }
`;

const P_LARGE = styled.p``;

const P_SMALL = styled.p``;

export default function IntroText() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    // triggerOnce: true,
  });
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <p ref={ref} className={inView ? 'large fade' : 'large'}>
          I believe my clients are the experts of their own lives, and my role
          is to partner with them to discover what it is they need to heal,
          grow, and achieve the life they imagined.
        </p>
        <P_SMALL ref={ref} className={inView ? 'small fade' : 'small'}>
          26 years of clinical experience
        </P_SMALL>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
