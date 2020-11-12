import React from 'react';
import styled from 'styled-components';
import VAR from '../../helpers/VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)`
  padding: 12rem 0;
`;

const Container = styled(layout.container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 4rem;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: ${VAR.media640}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactHeader = styled.div`
  margin-bottom: 4rem;
  width: 100%;
`;

const ContactList = styled.ul`
  list-style-type: none;

  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;

    span {
      display: block;
      &:nth-child(1) {
        color: ${VAR.color_1};
      }

      &:nth-child(2) {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5rem;
        margin-top: 0.25rem;

        @media (min-width: ${VAR.media640}) {
          font-size: 1.5rem;
          line-height: 1.5rem;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <FullWidth>
      <Container>
        <ContactHeader>
          <h2>Contact</h2>
          <p>
            I invite you to contact me to see if my approach to care is
            something that would be of benefit to you.
          </p>
        </ContactHeader>

        <ContactList>
          <li>
            <span>phone</span>
            <span>585.314.0321</span>
          </li>
          <li>
            <span>email</span>
            <span>contact@drdoylepruitt.com</span>
          </li>
          <li>
            <span>address</span>
            <span>
              243 Center Street
              <br />
              Canandaigua, New York
            </span>
          </li>
        </ContactList>
      </Container>
    </FullWidth>
  );
};

export default Contact;
