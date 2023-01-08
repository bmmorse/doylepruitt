import React from 'react';
import styled from 'styled-components/macro';

const DIV_FULL = styled.div`
  background: #f7f2ff;
  padding: 160px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-size: cover;
  background-color: var(--white);
  background-position: bottom center;
  position: relative;
  background-attachment: fixed;
  gap: 24px;

  h2 {
    color: var(--text);
    text-align: center;
  }
  .contactInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;

    span {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    p {
      text-align: center;
      color: var(--lightText);
    }

    @media (min-width: 480px) {
      span {
        flex-direction: row;
        gap: 24px;
      }
    }
  }
`;

export default function Footer() {
  return (
    <DIV_FULL>
      <h2>I welcome you to contact me.</h2>
      <div className='contactInfo'>
        <span>
          <p>dpruittlcsw@gmail.com</p>
          <p>585-314-0321</p>
        </span>
        <p>243 Center St, Canandaigua, NY</p>
      </div>
    </DIV_FULL>
  );
}
