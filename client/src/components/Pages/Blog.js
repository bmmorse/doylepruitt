import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import VAR from '../VAR';
import layout from '../_layout';

import Banner from '../_page/_banner';
import PageText from '../_page/_text';

const Blog = () => {
  return (
    <>
      <Banner>Blog</Banner>
      <PageText>
        <h2>Blog</h2>
        <p>Coming soon!</p>
      </PageText>
    </>
  );
};

export default Blog;