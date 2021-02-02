import React from 'react';
import styled from 'styled-components';

const DIV_FULL = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const DIV_CONTAINER = styled.div`
  margin: 8rem 0;
  max-width: 960px;
  width: 100%;

  @media (min-width: 640px) {
    margin: 12rem 0 12rem 0;
  }

  h3 {
    color: #032b46;
    line-height: 1;
    font-size: 2rem;
    font-weight: normal;
    margin: 0 0 5rem 0;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }

    li {
      align-items: center;
      background: #e7f6f8;
      border-radius: 8px;
      display: flex;
      list-style-type: none;
      padding: 2rem;
      transition: background 500ms ease;

      &:hover {
        background: #ffffff;
      }

      p {
        font-size: 20px;
        line-height: 1.2;
        margin: 0 0 0 1.5rem;
      }

      .circle {
        background: #032b46;
        border-radius: 50%;
        height: 1rem;
        margin: 6px 0 0 0;
        width: 1rem;
      }
    }
  }
`;

export default class IntroText extends React.Component {
  render() {
    const list = [
      'Heal from traumatic experiences',
      'Change destructive behaviors into healthy, helpful behaviors',
      'Navigate transitions in life and normal development',
      'Recognize their inner strength, potential, and worth',
      'Discover their true self',
      'Establish and enforce boundaries in their personal and professional relationships',
    ];

    return (
      <>
        <DIV_FULL>
          <DIV_CONTAINER>
            <h3>I have helped clients:</h3>
            <ul>
              {list.map((e) => {
                return (
                  <li>
                    <div className='circle'></div>
                    <p>{e}</p>
                  </li>
                );
              })}
            </ul>
          </DIV_CONTAINER>
        </DIV_FULL>
      </>
    );
  }
}
