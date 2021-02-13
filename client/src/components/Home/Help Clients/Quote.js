import React from 'react';
import styled from 'styled-components';

const DIV_CARD = styled.div`
  flex: 1 0 100%;
  padding: 0 5%;

  @media (min-width: 800px) {
    flex: 1 0 50%;
  }

  p {
    border-top: solid 2px #5eb2bc;
    padding: 46px 0 0 0;
    width: 100%;
    font-weight: 400;
    color: #eefdff;
  }
`;

export default function Quote({ text }) {
  return (
    <DIV_CARD>
      <p>{text}</p>
    </DIV_CARD>
  );
}
