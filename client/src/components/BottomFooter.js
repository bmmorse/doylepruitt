import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: #fcfcfc;
  padding: 40px 0;
`;

const DIV_MAXWIDTH = styled(max)`
  p {
    font-size: 12px;
    line-height: 16px;
  }
`;

export default function Footer() {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <p>© 2021 Doyle Pruitt</p>
        <p>Thank you for being here :)</p>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
