import React from 'react';
import styled from 'styled-components';
import heart from './heart.svg';
import tree from './tree.svg';

const DIV_FULL = styled.div`
  background-image: linear-gradient(180deg, #78cacb 0%, #008887 100%);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const DIV_CONTAINER = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 6rem 0;
  max-width: 960px;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const DIV_DIVIDER = styled.div`
  background: rgba(231, 246, 248, 0.15);
  height: 1px;
  width: 100%;

  @media (min-width: 1024px) {
    height: 80%;
    width: 1px;
  }
`;

const DIV_LOGOWRAP = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;

  @media (min-width: 1024px) {
    padding: 2rem 0;
  }

  img {
    height: 160px;
    width: auto;
  }

  p {
    line-height: 1;
    margin: 4rem 0 0 0;
    text-align: center;
    font-size: 2rem;
    color: #d8d8d8;
  }
`;

export default class LogoText extends React.Component {
  render() {
    return (
      <>
        <DIV_FULL>
          <DIV_CONTAINER>
            <DIV_LOGOWRAP>
              <img src={heart} alt='' />
              <p>Trauma Expert</p>
            </DIV_LOGOWRAP>
            <DIV_DIVIDER />
            <DIV_LOGOWRAP>
              <img src={tree} alt='' />
              <p>
                15+ years of<br></br>clinical experience
              </p>
            </DIV_LOGOWRAP>
          </DIV_CONTAINER>
        </DIV_FULL>
      </>
    );
  }
}
