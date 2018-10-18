import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import Clock from './../components/Clock';
import Form from './../components/Form';

class Home extends Component {
 
  render() {

    return (
      <AppConsumer>
        {context => (
          <div>
          <Form number={1}/>
          <Form number={2}/>
          <Form number={3}/>

               <pre>{JSON.stringify(context, null, 4)}</pre>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Home;
