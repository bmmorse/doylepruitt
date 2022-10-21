import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)``;

const DIV_MAXWIDTH = styled(max)`
  align-items: flex-start;

  .contactInfo {
    margin: 64px 0;

    h4 {
      margin: 0 0 24px 0;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }

  p {
    max-width: 275px;
  }
`;

export default function Footer() {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <h3>Contact</h3>

        <div className='contactInfo'>
          <h4>585-314-0321</h4>
          <h4>dpruittlcsw@gmail.com</h4>
          <h4>243 Center Street, Canandaigua, New York</h4>
        </div>
        <p>
          I invite you to contact me and see if my approach to care is something
          that would be of benefit to you.
        </p>
      </DIV_MAXWIDTH>
      {/* <p>© 2021 Doyle Pruitt</p> */}
    </DIV_FULL>
  );
}
