import React from 'react';
import Globals from './Globals/index';
import Routes from './Routes/index';

/**
 * Color Guide
 *
 *   white alternative:    hsla(168, 100%, 98%, 1);    #F3FFFD
 *
 */

class App extends React.Component {
  render() {
    return (
      <>
        <Globals />
        <div className='App'>
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
