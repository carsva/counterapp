import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';

class Clock extends Component {
 
  render() {
    return (
      <AppConsumer>
        {context => (
          <div>
            <h1>{context.state.time} minuter</h1>
            <form onSubmit={(e) => {
                  e.preventDefault();

                  const values = {
                    hours: e.target.hours.value,
                    minutes: e.target.minutes.value,
                  };
                  context.state.test(values);
                }}>
            
                <input type="text" name="hours" placeholder="hours" />
                <input type="text" name="minutes" placeholder="minutes" />
                <button className="button-style">Add time</button>
            
                
            </form>
            <button onClick={context.state.test}>Start</button>
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