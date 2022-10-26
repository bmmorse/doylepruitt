import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: var(--text);
  padding: 120px 24px;
`;

const DIV_MAXWIDTH = styled(max)`
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    margin: 0 0 40px 0;
    color: var(--red);
  }
  .contactInfo {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 40px 0;

    p {
      margin: 0 0 16px 0;
      color: var(--white);
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
  p.thanks {
    font-size: 14px;
    line-height: 16px;
    color: var(--white);
    span {
      color: var(--red);
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media (min-width: 800px) {
    .contactInfo {
      flex-direction: row;
      p {
        margin: 0 32px 0 0;
      }
    }
  }
`;

export default function Footer() {
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <div className='contactInfo'>
          <p>dpruittlcsw@gmail.com</p>
          <p>585-314-0321</p>
          <p>243 Center St, Canandaigua, NY</p>
        </div>
        <p className='thanks'>
          <span>Thank you</span> for being here
        </p>
      </DIV_MAXWIDTH>
      {/* <p>© 2021 Doyle Pruitt</p> */}
    </DIV_FULL>
    // &#128522
  );
}
