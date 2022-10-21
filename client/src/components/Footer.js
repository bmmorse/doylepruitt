import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: var(--text);
`;

const DIV_MAXWIDTH = styled(max)`
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  h3 {
    margin: 0 0 16px 0;
    color: var(--red);
  }
  .contactInfo {
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    p {
      margin: 0 32px 0 0;
      color: var(--white);
      &:nth-last-child(1) {
        margin: 0 0 0 auto;
        color: var(--white);
        span {
          color: var(--red);
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <h3>Contact</h3>

        <div className='contactInfo'>
          <p>585-314-0321</p>
          <p>dpruittlcsw@gmail.com</p>
          <p>243 Center St, Canandaigua, NY</p>
          <p>
            <span>Thank you</span> for being here
          </p>
        </div>
      </DIV_MAXWIDTH>
      {/* <p>© 2021 Doyle Pruitt</p> */}
    </DIV_FULL>
    // &#128522
  );
}
