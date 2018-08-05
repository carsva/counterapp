import React from 'react';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
    hour: 0,
    minute: 0,
  };

  test = values => {
    let hour = values.hour;
    let minute = values.minute;

    var startDate = new Date();
    // Do your operations
    var endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
      hour,
      minute,
      0,
    );
    var minutesLeft = (endDate.getTime() - startDate.getTime()) / 60000;

    console.log(minutesLeft);

    if (startDate > endDate) {
      var endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 1,
        hour,
        minute,
        0,
      );
      var minutesLeft = (endDate.getTime() - startDate.getTime()) / 60000;
      console.log('En dag lades till');
    }

    console.log(minutesLeft);
    this.setState({
      hour: Math.floor(minutesLeft / 60),
      minute: Math.floor(minutesLeft % 60),
    });
    this.onDuty();
    
  };

  onDutyCheck = () => {
    console.log('check');

    if (this.state.minute === 0 && this.state.hour > 0) {
      this.setState({
        hour: this.state.hour - 1,
        minute: 59,
      });
    } else if (this.state.minute === 0 && this.state.hour === 0) {
      clearInterval(this.onDutyCheck);
      clearInterval(this.onDuty);
      clearInterval();
    }else {

      this.setState({
        minute: this.state.minute - 1,
      });
      document.title = this.state.hour + ' h & ' + this.state.minute + " min";
    }

    
   
  };

  onDuty = () => {
    console.log('starting duty');

    setInterval(this.onDutyCheck, 60000);
  };

  render() {
    const value = {
      state: {
        ...this.state,
        onDuty: this.onDuty,
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
