import React, { createRef, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import Header from './components/Banner';
import Intro from './components/Intro';
import Card from './components/Card';
import Navigation from './components/Navigation';
import { useLocation, useOutlet } from 'react-router-dom';
import GlobalCSS from './Globals/GlobalCSS';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, [pathname]);

  return null;
}

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <RouteWrapper id='home' />,
    nodeRef: createRef(),
    index: true,
  },
  {
    path: '/bio',
    name: 'Bio',
    element: <RouteWrapper id='bio' />,
    nodeRef: createRef(),
    index: false,
  },
  {
    path: '/services',
    name: 'Services',
    element: <RouteWrapper id='services' />,
    nodeRef: createRef(),
    index: false,
  },
  {
    path: '/fees',
    name: 'Fees',
    element: <RouteWrapper id='fees' />,
    nodeRef: createRef(),
    index: false,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <RouteWrapper id='contact' />,
    nodeRef: createRef(),
    index: false,
  },
];

function RouteWrapper(props) {
  const DATA = [
    {
      id: 'home',
      components: (
        <>
          <Header />
          <Intro />
          <Card content='myServices' className='myServices' alignImage='left' />
          <Card content='aboutMe' alignImage='right' />
          <Footer />
        </>
      ),
    },
    {
      id: 'bio',
      components: (
        <>
          <PageHeader title='Bio' />
          <PageContent />
          <Footer />
        </>
      ),
    },
    {
      id: 'services',
      components: (
        <>
          <PageHeader title='Services' />
          <PageContent />
          <Footer />
        </>
      ),
    },
    {
      id: 'fees',
      components: (
        <>
          <PageHeader title='Fees' />
          <PageContent />
          <Footer />
        </>
      ),
    },
    {
      id: 'contact',
      components: (
        <>
          <PageHeader title='Contact' />
          <PageContent />
          <Footer />
        </>
      ),
    },
  ];

  const { components } = DATA.find((obj) => obj.id === props.id);
  return <>{components}</>;
}

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <div id='App'>
        <ScrollToTop />
        <GlobalCSS />

        <Navigation />

        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames='page'
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className='page'>
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>ERROR ERROR</h1>,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
