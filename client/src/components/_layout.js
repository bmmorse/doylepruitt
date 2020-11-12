import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import VAR from '../helpers/VAR';

const FullWidth = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  max-width: ${VAR.media1024};
  width: 100%;
`;

const layout = {
  full: FullWidth,
  container: Container,
};

export default layout;
