import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Clock from './../components/Clock';

class Home extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
          <Clock />
               <pre>{JSON.stringify(context, null, 4)}</pre>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
