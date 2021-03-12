import React from 'react';
import styled from 'styled-components';
import phone from './phone.svg';
import mail from './mail.svg';
import address from './address.svg';

const DIV_FULL = styled.div`
  width: 100%;
`;

const DIV_HEADER = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 10rem 1rem 5rem 1rem;
  width: 100%;

  h2 {
    color: #00284;
    width: auto;
    margin: 0 0 4rem 0;
  }

  p {
    max-width: 480px;
    text-align: center;
  }
`;

const DIV_CONTACT_LIST = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 5rem 0;
  width: 100%;

  @media (min-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const DIV_CONTACT_ITEM = styled.div`
  align-items: center;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  bottom: 0;
  transition: bottom 500ms ease;
  padding: 0 0 4rem 0;
  @media (min-width: 820px) {
  }

  &:hover {
    @media (min-width: 820px) {
      bottom: 1rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  h4 {
    // color: #eefdff;
    font-size: 24px;
    padding: 2rem 0 0 0;
    text-align: center;
    font-family: 'NHRegular';

    @media (min-width: 720px) {
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

const DIV_BOTTOM = styled.div`
  border-top: solid 1px #eefdff;
  display: flex;
  justify-content: center;
  padding: 1rem 0 0.8rem 0;
  width: 100%;

  p {
    color: #5eb2bc;
    font-size: 12px;
    margin: 0;
    width: auto;
  }
`;

export default class ContactFooter extends React.Component {
  render() {
    const ContactInfo = [
      { value: '585-314-0321', svg: phone },
      { value: 'dpruittlcsw@gmail.com', svg: mail },
      {
        value: (
          <>
            243 Center Street<br></br>Canandaigua, New York
          </>
        ),
        svg: address,
      },
    ];

    return (
      <DIV_FULL>
        <DIV_HEADER>
          <h2>Contact</h2>
          <p>
            I invite you to contact me to see if my approach to care is
            something that would be of benefit to you.
          </p>
        </DIV_HEADER>
        <DIV_CONTACT_LIST>
          {ContactInfo.map((e) => {
            return (
              <DIV_CONTACT_ITEM>
                <img src={e.svg} alt='' />
                <h4>{e.value}</h4>
              </DIV_CONTACT_ITEM>
            );
          })}
        </DIV_CONTACT_LIST>

        <DIV_BOTTOM>
          <p>© 2021 Doyle Pruitt</p>
        </DIV_BOTTOM>
      </DIV_FULL>
    );
  }
}
