import React from 'react';
import styled from 'styled-components';
import phone from './phone.svg';
import mail from './mail.svg';
import address from './address.svg';

const DIV_FULL = styled.div`
  align-items: center;
  background: #7acacb;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DIV_CONTAINER = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 8rem 0;
  max-width: 640px;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 640px) {
    margin: 192px 0 128px 0;
  }

  h3 {
    font-size: 32px;
    color: #0c5052;
    letter-spacing: 0;
    line-height: 32px;
    margin: 0 0 72px 0;
  }

  p {
    font-size: 24px;
    color: #00969b;
    text-align: center;
    line-height: 1.2;
    margin: 0 0 72px 0;
  }
`;

const DIV_CONTACT_ITEM = styled.div`
  align-items: center;
  box-shadow: 0 2px 5px -1px rgba(255, 255, 255, 0.85),
    0 -2px 4px -1px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 0 32px 0;
  padding: 32px 0;
  width: 100%;

  img {
    margin: 0 0 24px 0;
    width: 32px;
    height: 32px;
  }

  h4 {
    font-weight: bold;
    font-size: 24px;
    color: #0c5052;
    text-align: center;
    line-height: 24px;
  }
`;

const DIV_BOTTOM = styled.div`
  border-top: solid 1px #00969b;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  width: 100%;

  p {
    color: #e7f6f8;
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
      <>
        <DIV_FULL>
          <DIV_CONTAINER>
            <h3>Contact Information</h3>
            <p>
              I invite you to contact me to see if my approach to care is
              something that would be of benefit to you.
            </p>

            {ContactInfo.map((e) => {
              return (
                <DIV_CONTACT_ITEM>
                  <img src={e.svg} alt='' />
                  <h4>{e.value}</h4>
                </DIV_CONTACT_ITEM>
              );
            })}
          </DIV_CONTAINER>
          <DIV_BOTTOM>
            <p>© 2021 Doyle Pruitt</p>
          </DIV_BOTTOM>
        </DIV_FULL>
      </>
    );
  }
}
