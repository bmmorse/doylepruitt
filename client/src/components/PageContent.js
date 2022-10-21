import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import data from './Page/data';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  padding: 48px 80px;
`;
const DIV_MAXWIDTH = styled(max)`
  p {
    margin: 0 0 32px 0;
    max-width: 640px;
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
