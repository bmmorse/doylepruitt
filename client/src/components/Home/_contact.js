import React from 'react';
import styled from 'styled-components';
import images from '../_images';
import { VAR } from '../GlobalStyle';
import layout from '../_layout';

const FullWidth = styled(layout.full)`
  background: ${(props) => (props.color ? VAR.color_1 : '')};
  padding: 12rem 0 8rem 0;
  font-family: ${VAR.playfair};

  h2 {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0 1rem;

  @media (min-width: ${VAR.mediaM}) {
    padding: 0;
  }

  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 0 8rem 0;

    @media (min-width: ${VAR.mediaM}) {
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

  @media (min-width: ${VAR.mediaM}) {
    padding: 0 0 0 4rem;
  }

  span {
    font-family: ${VAR.playfair};
    display: block;

    &:nth-child(2) {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.4rem;

      @media (min-width: ${VAR.mediaM}) {
        font-family: ${VAR.playfair};
        font-size: 2rem;
        line-height: 2rem;
      }
    }
  }
`;

const Contact = () => {
  return (
    <>
      <FullWidth color>
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
      </FullWidth>
    </>
  );
};

export default Contact;
