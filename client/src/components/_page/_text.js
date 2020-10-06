import React from 'react';
import styled from 'styled-components';
import VAR from '../VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)``;
const Container = styled(layout.container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;

  h2,
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    margin: 0 0 2rem 0;
    max-width: ${VAR.media640};
    width: 100%;
  }

  ul {
    padding-left: 2rem;
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
