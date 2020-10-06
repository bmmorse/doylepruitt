import React from 'react';
import styled from 'styled-components';
import images from '../_images';
import VAR from '../VAR';
import layout from '../_layout';

const FullWidth = styled(layout.full)`
  padding: 12rem 0 8rem 0;
  font-family: ${VAR.lato};

  h2 {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const Container = styled(layout.container)`
  display: flex;
  flex-direction: column;
`;

const ContactHeader = styled.div``;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0 1rem;

  @media (min-width: ${VAR.media640}) {
    padding: 0;
  }

  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 0 8rem 0;

    @media (min-width: ${VAR.media640}) {
      flex-direction: row;
    }
  }

  img {
    display: block;
    max-width: 4rem;
    width: 100%;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 0;

  @media (min-width: ${VAR.media640}) {
    padding: 0 0 0 4rem;
  }

  span {
    display: block;

    &:nth-child(2) {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.4rem;

      @media (min-width: ${VAR.media640}) {
        font-size: 2rem;
        line-height: 2rem;
      }
    }
  }
`;

const Contact = () => {
  return (
    <FullWidth>
      <Container>
        <ContactHeader>
          <h3>Contact</h3>
          <p>
            I am currently accepting new patients, and would appreciate the
            opportunity to help you.
          </p>
        </ContactHeader>

        <ContactList>
          <li>
            <img src={images.phone} />
            <ContactText>
              <span>phone</span>
              <span>585.314.0321</span>
            </ContactText>
          </li>
          <li>
            <img src={images.mail} />
            <ContactText>
              <span>email</span>
              <span>contact@drdoylepruitt.com</span>
            </ContactText>
          </li>
          <li>
            <img src={images.marker} />
            <ContactText>
              <span>address</span>
              <span>
                243 Center Street
                <br />
                Canandaigua, New York
              </span>
            </ContactText>
          </li>
        </ContactList>
      </Container>
    </FullWidth>
  );
};

export default Contact;
