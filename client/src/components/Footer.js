import React from 'react';
import styled from 'styled-components';

const DIV_FULL = styled.div`
  background: #eff5fb;
  padding: 160px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  .contactInfo {
    margin: 24px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    p {
      margin: 0 0 8px 0;

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
      <h3>Contact Me</h3>
      <div className='contactInfo'>
        <p>dpruittlcsw@gmail.com</p>
        <p>585-314-0321</p>
        <p>243 Center St, Canandaigua, NY</p>
      </div>
    </DIV_FULL>
  );
}
