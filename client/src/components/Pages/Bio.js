import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';
import Contact from '../Home/_contact';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';

const Bio = () => {
  return (
    <>
      <Banner>Bio</Banner>
      <PageText>
        <p>
          In 2001 I earned a Bachelor of Science degree in both Psychology and
          Social Work from Nazareth College. I graduated from Syracuse
          University in 2002 with an MSW degree. In 2012, I successfully passed
          New York State’s licensing exams and met the criteria needed to earn
          the coveted LCSW-R. In 2013, I earned a PhD from the University at
          Buffalo.
        </p>
      </PageText>
    </>
  );
};

export default Bio;
