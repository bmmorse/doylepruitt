const VAR = {
  // Routes Array
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/bio',
      name: 'Bio',
    },
    {
      path: '/services',
      name: 'Services',
    },
    {
      path: '/scholarship',
      name: 'Scholarship',
    },
    {
      path: '/blog',
      name: 'Blog',
    },
    {
      path: '/fees',
      name: 'Fees',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
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

  // Image List
  images: {
    doyle: 'https://doylepruitt.s3.us-east-2.amazonaws.com/doyle.jpg',
    doyleCircle:
      'https://doylepruitt.s3.us-east-2.amazonaws.com/doyleCircle.png',
    homeImage: 'https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg',
    office: 'https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg',
    porter: 'https://doylepruitt.s3.us-east-2.amazonaws.com/porter.jpg',
    mail: 'https://doylepruitt.s3.us-east-2.amazonaws.com/mail.png',
    marker: 'https://doylepruitt.s3.us-east-2.amazonaws.com/marker.png',
    phone: 'https://doylepruitt.s3.us-east-2.amazonaws.com/phone.png',
  },
};

export default VAR;
