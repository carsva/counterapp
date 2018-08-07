import React from 'react';

export const AppContext = React.createContext('counter');

// let minute = [];
// let hour = [];

// var blabla = {
//   countdownTimeer: '',
// };

// console.log(blabla);

// localStorage.setItem('calle', JSON.stringify(blabla));

// console.log(localStorage);
// var anothervariable = JSON.parse(localStorage.getItem('calle'));
// console.log(anothervariable);

// if (localStorage.hour && localStorage.minute) {
//   let localHour = JSON.parse(localStorage.hour);
//   let localMinute = JSON.parse(localStorage.minute);
//   minute = localMinute;
//   hour = localHour;
// }

export class AppProvider extends React.Component {
  state = {
    endTime: "",
    hour: "",
    minute: "",
    intervalId: "",
    abro: 0,
  };

  test = values => {

    let hour = values.hour;
    let minute = values.minute;

    var startDate = new Date();
    // Do your operations
    var endTime = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
      hour,
      minute,
      0,
    );
    var minutesLeft = (endTime.getTime() - startDate.getTime()) / 60000;

    if (startDate > endTime) {
      var endTime = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 1,
        hour,
        minute,
        0,
      );
      var minutesLeft = (endTime.getTime() - startDate.getTime()) / 60000;
    }
    localStorage.endTime = endTime;
    console.log(localStorage.endTime)

    this.setState({
      hour: Math.floor(minutesLeft / 60),
      minute: Math.floor(minutesLeft % 60),
      endTime: endTime.toISOString(),
    });
    clearInterval(this.state.intervalId);
    this.startTimer();
    
  };

  startTimer = () => {
    // let now =  new Date();
    // let then = new Date(localStorage.endTime);

    // var NewMinutesLeft = (then - now);
    // NewMinutesLeft = NewMinutesLeft / 60000;

    // this.setState({
    //   endTime: then,
    //   hour: Math.floor(NewMinutesLeft / 60),
    //   minute: Math.floor(NewMinutesLeft % 60),
    // });

    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
  }

 
  componentDidMount() {
    

  // let now =  new Date();
  // let localStorageTime = new Date(localStorage.endTime);
  // console.log('this is the localStorage endtime: ' + localStorage.endTime)
  // if(localStorageTime < now) {
    
  //   console.log('Its overtime')
   
  // } else {
    this.startTimer();
 }
 
 componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
 }
 
 timer = () => {

  console.log('timer runs')

    let now =  new Date();
    let then = new Date(localStorage.endTime);

    var minutesLeft = (then - now) / 60000;

    this.setState({
      hour: Math.floor(minutesLeft / 60),
      minute: Math.floor(minutesLeft % 60),
      endTime: localStorage.endTime,
    });

    if(this.state.hour === 0 && this.state.minute === 0) {
      clearInterval(this.state.intervalId);
    }

    if(this.state.hour < 0) {
      console.log('Hour is zero')
      this.setState({
        hour: 0,
        minute: 0,
        endTime: 0,
      });
      clearInterval(this.state.intervalId);
    }
   





  
  //   let now =  new Date();
  //   let then = new Date(localStorage.endTime);

  //   if (this.state.minute === 0 && this.state.hour > 0) {
  //     this.setState({
  //       hour: this.state.hour - 1,
  //       minute: 59,
  //     });
  //     console.log(' first fires')
      
  //     // localStorage.hour = JSON.stringify(Math.floor(this.state.hour - 1));
  //     // localStorage.minute = JSON.stringify(Math.floor(59));
  //   } else if (this.state.minute === 0 && this.state.hour === 0) {
  //     clearInterval(this.state.intervalId);
  //     var audio = new Audio('wakeup.mp3');
  //     audio.play();
  //     document.title = this.state.hour + ' h & ' + this.state.minute + ' min';
  //     console.log(' else If fires')

  //   } else {
  //     console.log(' else fires')
  //     document.title = this.state.hour + ' h & ' + this.state.minute + ' min';
  //   }

  //   var NewMinutesLeft = (then - now);
  //   NewMinutesLeft = NewMinutesLeft / 60000;

  //   this.setState({
  //     endTime: then,
  //     hour: Math.floor(NewMinutesLeft / 60),
  //     minute: Math.floor(NewMinutesLeft % 60),
  //   });
    
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
