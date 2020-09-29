import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { VAR } from '../GlobalStyle';
import layout from '../_layout';
import HomeContact from '../Home/_contact';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';

const Contact = () => {
  return (
    <>
      <Banner>Contact</Banner>
      <HomeContact></HomeContact>
    </>
  );
};

export default Contact;
