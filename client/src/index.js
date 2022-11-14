import React, { createRef, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import Header from './components/Header';
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
    element: <Home />,
    nodeRef: createRef(),
  },
  {
    path: '/bio',
    name: 'Bio',
    element: <Page />,
    nodeRef: createRef(),
  },
  {
    path: '/services',
    name: 'Services',
    element: <Page />,
    nodeRef: createRef(),
  },
  {
    path: '/fees',
    name: 'Fees',
    element: <Page />,
    nodeRef: createRef(),
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
];

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Card content='myServices' alignImage='left' />
      <Card content='aboutMe' alignImage='right' />
      <Footer />
    </>
  );
}

function Page() {
  return (
    <>
      <PageHeader />
      <PageContent />
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHeader />
      <PageContent />
    </>
  );
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

        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={500}
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
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
