import React, { useEffect, useContext } from 'react';
import styled from 'styled-components/macro';
import data from './data';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';
import { MobileDropdownContext } from '../Globals/Context';

const DIV_FULL = styled(full)`
  padding-top: 48px;
  padding-bottom: 48px;
  background: var(--white);
`;
const DIV_MAXWIDTH = styled(max)`
  & > * {
    max-width: 640px;
    width: 100%;
  }

  p {
    margin: 0 0 32px 0;
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

  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>{data[route]}</DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
