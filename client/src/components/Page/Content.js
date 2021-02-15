import React from 'react';
import styled from 'styled-components';
import data from './data';

const DIV_FULL = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DIV_TOP_COLOR = styled.div`
  background: #ffead6;
  height: 2rem;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const DIV_INNER = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  max-width: 720px;
  width: 100%;
  box-shadow: 0 -1px 16px -2px rgba(255, 255, 255, 0.5),
    0 32px 72px -8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (min-width: 640px) {
    margin: 4rem;
  }
`;

const DIV_TEXT = styled.div`
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 3rem 4rem;
  }

  ul {
    list-style-type: none;
    margin: 0 0 2rem 0;
    padding: 0 0 0 2rem;
    border-left: solid 1px #ffead6;

    li {
      display: flex;
      flex-direction: column;
      margin: 0 0 12px 0;
    }
  }

  p {
    font-size: 18px;
    color: #4e4e4e;
    letter-spacing: 0;
    line-height: 2rem;
    margin: 0 0 24px 0;
  }
`;

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  getData = (path) => {
    if (path.includes('bio')) {
      return data.bio;
    }

    if (path.includes('fees')) {
      return data.fees;
    }

    if (path.includes('services')) {
      return data.services;
    }
  };

  render() {
    return (
      <>
        <DIV_FULL>
          <DIV_INNER>
            <DIV_TOP_COLOR />
            <DIV_TEXT>{this.getData(this.props.path)}</DIV_TEXT>
          </DIV_INNER>
        </DIV_FULL>
      </>
    );
  }
}
