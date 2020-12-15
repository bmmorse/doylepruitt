import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../../helpers/VAR';
import layout from '../_layout';
import HomeContact from '../Home/_contact';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';
import List from '../_page/_List';

const Contact = () => {
  return (
    <>
      <Banner />
      <PageText>
        <h2>Contact</h2>
        <List.color>
          <li>
            <span>phone</span>
            <span>585.314.0321</span>
          </li>
          <li>
            <span>email</span>
            <span>dpruittlcsw@gmail.com</span>
          </li>
          <li>
            <span>address</span>
            <span>243 Center Street, Canandaigua, New York</span>
          </li>
        </List.color>
      </PageText>
    </>
  );
};

export default Contact;
