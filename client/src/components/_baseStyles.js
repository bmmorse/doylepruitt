import React from 'react';
import styled from 'styled-components/macro';

const DIV_FULL = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 80px 80px;
`;

const DIV_MAXWIDTH = styled.div`
  max-width: 1368px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BUTTON = styled.button`
  font-size: 14px;
  line-height: 24px;
  padding: 7px 14px;
  color: #10457c;
  border: solid 1px #10457c;
  border-radius: 2px;
  background: transparent;
`;

export { BUTTON, DIV_FULL, DIV_MAXWIDTH };
