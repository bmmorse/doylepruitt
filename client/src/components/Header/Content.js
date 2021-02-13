import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const DIV_TEXT = styled.div`
  align-items: center;
  animation: fade 500ms ease forwards 500ms;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 0;
  opacity: 0;

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  span.lcsw {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1;
    margin: 1rem 0 0 0;

    @media (min-width: 640px) {
      font-size: 1.5rem;
      margin: 20px 0 0 0;
    }
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: 900;
    line-height: 1;

    @media (min-width: 640px) {
      font-size: 24px;
    }
  }

  h1 {
    padding: ${(props) => (props.home_page ? '0' : '6rem 0 0 0')};
    font-size: ${(props) => (props.home_page ? '2.4rem' : '2rem')};
    line-height: 1;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: ${(props) => (props.home_page ? '4rem' : '2rem')};
    }
  }
`;

const DIV_DIVIDER_WRAPPER = styled.div`
  background: none;
  height: 1px;
  margin: ${(props) => (props.home_page ? '21px 0 27px 0' : '1rem 0')};
  max-width: 12rem;
  width: 100%;
`;

const DIV_DIVIDER = styled.div`
  background: white;
  width: ${(props) => (props.slide ? '100%' : '0%')};
  height: 100%;
  transition: width 500ms ease 1000ms;
`;

export default function HeaderText(props) {
  return (
    <>
      <DIV_TEXT home_page={props.home_page}>
        {props.home_page && (
          <>
            <h1>Dr. Doyle Pruitt</h1>
            <span className='lcsw'>LCSW-R</span>
            <DIV_DIVIDER_WRAPPER home_page={props.home_page}>
              <DIV_DIVIDER slide={props.background_is_loaded} />
            </DIV_DIVIDER_WRAPPER>
            <p>Hope. Growth. Resilience.</p>
          </>
        )}

        {!props.home_page && (
          <>
            <h1>
              {props.path.charAt(1).toUpperCase() + props.path.substring(2)}
            </h1>
            <DIV_DIVIDER_WRAPPER home_page={props.home_page}>
              <DIV_DIVIDER slide={props.background_is_loaded} />
            </DIV_DIVIDER_WRAPPER>
          </>
        )}
      </DIV_TEXT>
    </>
  );
}
