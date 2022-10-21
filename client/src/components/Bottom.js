import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: #fcfcfc;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const DIV_MAXWIDTH = styled(max)`
  flex-direction: row;
  justify-content: space-between;
  p {
    font-size: 12px;
    line-height: 16px;
  }
`;

export default function Footer() {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <p>© 2022 Doyle Pruitt, Ph.D., LCSW-R</p>
        <p>Thank you for being here &#128522;</p>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
