import React from 'react';

// Page Components
import Home from '../components/Home/index';
import Bio from '../components/Pages/Bio';
import Services from '../components/Pages/Services';
import Scholarship from '../components/Pages/Scholarship';
import Blog from '../components/Pages/Blog';
import Fees from '../components/Pages/Fees';
import Contact from '../components/Pages/Contact';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Bio',
    path: '/bio',
    component: Bio,
  },
  {
    name: 'Services',
    path: '/services',
    component: Services,
  },
  {
    name: 'Scholarship',
    path: '/scholarship',
    component: Scholarship,
  },
  {
    name: 'Blog',
    path: '/blog',
    component: Blog,
  },
  {
    name: 'Fees',
    path: '/Fees',
    component: Fees,
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
  },
];

export default routes;
