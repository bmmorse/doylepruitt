import React from 'react';
import styled from 'styled-components';
import VAR from '../../helpers/VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)``;
const Container = styled(layout.container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;

  h2,
  h3,
  p,
  ul {
    font-size: 1.2rem;
    line-height: 2.2rem;
    margin: 0 0 2rem 0;
    max-width: ${VAR.media640};
    width: 100%;
  }

  h3 {
    color: ${VAR.color_1};
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
  }

  section {
    margin: 0 0 6rem 0;
  }

  ul {
    padding-left: 2rem;
    li {
      font-size: 1.25rem;
      line-height: 2.5rem;
    }
  }
`;

const Text = (props) => {
  return (
    <FullWidth>
      <Container>{props.children}</Container>
    </FullWidth>
  );
};

export default Text;
