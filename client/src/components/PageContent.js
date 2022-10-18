import React from 'react';
import styled from 'styled-components/macro';
import data from './Page/data';

const DIV_FULL = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 72px 0 0 0;
`;

const DIV_INNER = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
`;

const H2_HEADING = styled.h2`
  margin: 4rem 0 2rem 1rem;
  display: ${(props) => (props.heading === '/contact' ? 'none' : 'block')};
`;

const DIV_TEXT = styled.div`
  padding: 0 1rem;

  h2 {
    margin: 4rem 0 2rem 0;
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
    letter-spacing: 0;
    margin: 0 0 24px 0;
  }
`;

export default class Content extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const PATH = this.props.path;

    const getData = (path) => {
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

    const getHeader = (str) => {
      // remove first char
      const sub = str.slice(1);
      return sub.charAt(0).toUpperCase() + sub.slice(1);
    };

    return (
      <DIV_FULL>
        <DIV_INNER>
          <H2_HEADING heading={PATH}>{getHeader(PATH)}</H2_HEADING>
          <DIV_TEXT>{getData(PATH)}</DIV_TEXT>
        </DIV_INNER>
      </DIV_FULL>
    );
  }
}
