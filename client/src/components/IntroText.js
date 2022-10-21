import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { BUTTON, DIV_FULL, DIV_MAXWIDTH } from './_baseStyles';

const P_LARGE = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  font-weight: 500;
  color: var(--darkBlue);
`;

const P_SMALL = styled.p`
  color: var(--blueGrey);
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin: 80px 0 0 0;
`;

export default function IntroText() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <P_LARGE className={inView ? 'fade' : ''}>
          I believe my clients are the experts of their own lives, and my role
          is to partner with them to discover what it is they need to heal,
          grow, and achieve the life they imagined.
        </P_LARGE>
        <P_SMALL className={inView ? 'fade' : ''}>
          26 years of clinical experience
        </P_SMALL>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
