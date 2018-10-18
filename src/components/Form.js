import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Form extends Component {
  render() {

      
    
    
    return (
      <AppConsumer>
        {context => (
          <div className="container">
          <div className="form-container">
            <form
              onSubmit={e => {
                e.preventDefault();

                const values = {
                  name: e.target.name.value,
                  hour: e.target.hour.value,
                  minute: e.target.minute.value,
                  number: this.props.number,
                };
                context.state.test(values);
              }}
            >
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="hour" placeholder="hour" />
              <input type="text" name="minute" placeholder="minute" />
              <button className="button-style">Start</button>
            </form>
            </div>
           Form component
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Form;