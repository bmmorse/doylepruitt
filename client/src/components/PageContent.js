import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import data from './Page/data';
import { BUTTON, DIV_FULL, DIV_MAXWIDTH } from './_baseStyles';

export default function Content() {
  let route = window.location.pathname.substring(1);
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>{data[route]}</DIV_MAXWIDTH>
    </DIV_FULL>
  );
}
