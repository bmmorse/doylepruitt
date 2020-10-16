import React from 'react';

function formatRouteName(str) {
  // if the route name is '/', return 'Home', otherwise format the name
  if (str.length > 1) {
    const removeFirstChar = str.substring(1);
    return removeFirstChar.charAt(0).toUpperCase() + removeFirstChar.slice(1);
  } else {
    return 'Home';
  }
}

const VAR = {
  // Routes Array
  formatRouteName,
  routes: [
    '/',
    '/bio',
    '/services',
    '/scholarship',
    '/blog',
    '/fees',
    '/contact',
  ],

  // Fonts
  lato: `'Lato', sans-serif`,
  playfair: `'Playfair Display', serif`,

  // Colors
  dark_1: 'hsla(0, 0%, 16%, 1)',

  grey_1: 'hsla(0, 0%, 56%, 1)',

  color_1: 'hsla(182, 62%, 32%, 1)',

  // Media queries
  media1200: '75rem', // 1200px
  media1024: '64rem', // 1024px
  media768: '48rem', //   768px
  media640: '40rem', //   640px
  media480: '30rem', //   480px
};

export default VAR;
