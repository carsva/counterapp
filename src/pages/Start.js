import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Clock from './../components/Clock';
import { Link } from 'react-router-dom';

class Start extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
              <div>Im the start component</div>
              <Link to="/home"><button>To the timers</button></Link>
          <div>
                <h3>Data that lives in the context</h3>
                <pre>{JSON.stringify(context, null, 4)}</pre>
              </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
