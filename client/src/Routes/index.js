import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/index';
import Page from '../components/Page/index';

/**
 * @props {object} config | the config object from <App />
 */
export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/bio'>
            <Page path='/bio' />
          </Route>

          <Route exact path='/services'>
            <Page path='/services' />
          </Route>

          <Route exact path='/scholarship'>
            <Page path='/scholarship' />
          </Route>

          <Route exact path='/blog'>
            <Page path='/blog' />
          </Route>

          <Route exact path='/fees'>
            <Page path='/fees' />
          </Route>

          <Route exact path='/contact'>
            <Page path='/contact' />
          </Route>
        </Switch>
      </>
    );
  }
}
