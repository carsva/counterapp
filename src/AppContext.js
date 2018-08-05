import React from 'react';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    time: 0,
  };

  test = values => {
    let hour = values.hour;
    let minute = values.minute;

    var startDate = new Date();
// Do your operations
    var endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), hour, minute, 0);
    var minutesLeft = (endDate.getTime() - startDate.getTime()) / 60000;

    console.log(minutesLeft)

    if(startDate > endDate) {
      var endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1, hour, minute, 0);
      var minutesLeft = (endDate.getTime() - startDate.getTime()) / 60000;
      console.log('En dag lades till')
    }

    console.log(minutesLeft)
    this.setState({time : Math.floor(minutesLeft)})

  };

  render() {
    const value = {
      state: {
        ...this.state,
        test: this.test,
      },
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
