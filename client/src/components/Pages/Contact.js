import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';
import HomeContact from '../Home/_contact';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';

const Contact = () => {
  return (
    <>
      <>
        <Banner></Banner>
        <PageText>
          <h2>Contact</h2>
          <p>585.314.0321</p>
          <p>contact@drdoylepruitt.com</p>
          <p>243 Center Street, Canandaigua, New York</p>
        </PageText>
      </>
    </>
  );
};

export default Contact;
