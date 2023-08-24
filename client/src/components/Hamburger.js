import React, { useState } from 'react';
import styled from 'styled-components/macro';

const DIV_HAMBURGER = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 32px 0 32px;
  margin: 0 -32px 0 0;
  .hamburger-lines {
    width: 24px;
    height: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      width: 100%;
      height: 2px;
      background: var(--lightText);
      transition: transform 500ms ease, opacity 300ms ease;
      border-radius: 8px;
      &.top {
        transform-origin: 16% 0%;
        transform: rotate(0deg);
      }

      &.bottom {
        transform-origin: 0% 0%;
        transform: rotate(0deg);
      }

      &.active {
        &.top {
          transform: rotate(45deg);
        }
        &.middle {
          opacity: 0;
        }
        &.bottom {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
export default function Hamburger({ active, click }) {
  return (
    <DIV_HAMBURGER onClick={click} className='hamburger'>
      <div className='hamburger-lines'>
        <div className={active ? 'top active' : 'top'}></div>
        <div className={active ? 'middle active' : 'middle'}></div>
        <div className={active ? 'bottom active' : 'bottom'}></div>
      </div>
    </DIV_HAMBURGER>
  );
}
