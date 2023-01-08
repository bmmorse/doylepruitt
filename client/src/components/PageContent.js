import React, { useEffect, useContext } from 'react';
import styled from 'styled-components/macro';
import data from './data';

const DIV_FULL = styled.div`
  background: var(--white);
  /* min-height: calc(100vh - 80px - 232px); */
  padding: 40px max(calc((100vw - 1368px) / 2), 24px);
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    max-width: 640px;
    width: 100%;
  }

  .center {
    text-align: center;
  }

  p {
    margin: 0 0 28px 0;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 0 0 32px 0;
    padding: 0 0 0 32px;

    li {
      line-height: 32px;
    }
  }
`;

export default function Content() {
  let route = window.location.pathname.substring(1);

  return <DIV_FULL>{data[route]}</DIV_FULL>;
}
