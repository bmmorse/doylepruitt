import React from 'react';
import styled from 'styled-components';
import VAR from '../../helpers/VAR';

const BulletList = styled.ul`
  padding-left: 2rem;
  li {
    font-size: 1.25rem;
    line-height: 2.5rem;
  }
`;

const ColorList = styled.ul`
  padding-left: 0 !important;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 2rem 0;

    span {
      font-size: 1.25rem;
      line-height: 1.5rem;
      padding: 0 0 0.25rem 0;

      &:nth-child(1) {
        color: ${VAR.color_1};
        font-size: 1rem;
        line-height: 1rem;
      }
    }
  }
`;

const List = {
  bullet: BulletList,
  color: ColorList,
};

export default List;
