import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Clock extends Component {
  render() {
    
    const noTimer = (state) => {
      if(state.noTimer === true) {
        return "0 hours and 0 minutes"
      } else {
        return <div>{state.timers[0].hour} hours and {state.timers[0].minute} minutes</div>
        
      }
      console.log('no timer')
      
      
    }

    return (
      <AppConsumer>
        {context => (
          <div className="container">
            <div className="rubbe-container">
              <h1 className="rubbe">
              {noTimer(context.state)}
                
              </h1>
            </div>
            <div className="form-container">
            <form
              onSubmit={e => {
                e.preventDefault();

                const values = {
                  hour: e.target.hour.value,
                  minute: e.target.minute.value,
                };
                context.state.test(values);
              }}
            >
              <input type="text" name="hour" placeholder="hour" />
              <input type="text" name="minute" placeholder="minute" />
              <button className="button-style">Start</button>
            </form>
            </div>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Clock;

/*
<form
                onSubmit={e => {
                  e.preventDefault();

                  const values = {
                    name: e.target.name.value,
                    amount: parseInt(e.target.amount.value),
                    waterInterval: parseInt(e.target.waterInterval.value),
                    picture: e.target.picture.value,
                  };
                  context.state.newPlant(values);
                  this.props.history.push('/home');
                }}
              >
                <input type="text" name="name" placeholder="Name" />
                <input type="hidden" name="picture" value="./../plant.jpg" />
                <select name="amount">
                  <option value="0">Amount of water (dl):</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <select name="waterInterval">
                  <option value="0">How often?</option>
                  <option value="1">Everyday</option>
                  <option value="2">Every second day</option>
                  <option value="3">Every third day</option>
                  <option value="7">Once a week</option>
                </select>
                <button className="button-style">Add plant</button>
              </form>

*/
