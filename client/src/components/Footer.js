import React from 'react';
import styled from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  background: linear-gradient(180deg, #2b2e45 0%, #2d2f46 100%);
  padding: 80px 24px;
`;

const DIV_MAXWIDTH = styled(max)`
  flex-wrap: wrap;
  justify-content: center;

  .contactInfo {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 40px 0;

    p {
      margin: 0 0 16px 0;
      color: var(--sunset5);
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
  p.thanks {
    font-size: 14px;
    line-height: 16px;
    color: var(--sunset5);
    span {
      color: var(--sunset2);
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media (min-width: 800px) {
    .contactInfo {
      flex-direction: row;
      p {
        margin: 0 40px 0 0;
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
