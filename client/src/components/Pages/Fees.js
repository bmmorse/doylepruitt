import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';

const Fees = () => {
  return (
    <>
      <Banner>Fees</Banner>
      <PageText>
        <h2>Fees</h2>
        <p>Individual therapy: $120/therapy hour</p>
        <p>Court appearances: $400/hour minimum two hours</p>
        <p>Clinical Supervision: $100/hour </p>
      </PageText>
    </>
  );
};

export default Fees;
