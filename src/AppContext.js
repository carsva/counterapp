import React from 'react';
import moment from 'moment';

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
    timers: [
      { name: "",
        startTime: "",
        endTime: "",
        hour: "",
        minute: "",
        intervalId: ""
      },
      {
        name: "",
        startTime: "",
        endTime: "",
        hour: "",
        minute: "",
        intervalId: ""
      },
      { name: "",
        startTime: "",
        endTime: "",
        hour: "",
        minute: "",
        intervalId: ""
      },
    ]
  };

  test = values => {

    let hour = values.hour;
    let minute = values.minute;

  
    var minutesLeft = moment()

    var startTime = moment();
    var endTime = moment({ hour:hour, minute:minute });
    // var endTime = moment().add(2, 'hours');
    // var endTime = moment("06:12:07 pm").format("x");
    var minutesLeft = (endTime - startTime) / 60000
    
    if (minutesLeft < 0) {
      minutesLeft = minutesLeft + 1440;
      endTime = moment(endTime).add(24, 'hours');
    }
    
    localStorage.endTime = endTime;
    console.log('endTime set in local storage', localStorage.endTime)

    this.setState({
      // ...this.state,
      timers: [
        {
            name: "",
            startTime: "",
            endTime: "",
            hour: Math.floor(minutesLeft / 60),
            minute: Math.floor(minutesLeft % 60),
            intervalId: ""
        },


        // hour: Math.floor(minutesLeft / 60),
        // minute: Math.floor(minutesLeft % 60),
        // endTime: endTime,
        // startTime,
      ],

    });
    // clearInterval(this.state.intervalId);
    // this.startTimer();
    
  };

  startTimer = () => {
  
    var intervalId = setInterval(this.timer, 1000);
    // this.setState({intervalId: intervalId});
  }

 
  componentDidMount() {

    this.startTimer();
 }
 
 componentWillUnmount() {
   
    clearInterval(this.state.intervalId);
 }
 
 timer = () => {

    let now =  moment();
    let then = moment(localStorage.endTime)

    // console.log(now)
    // console.log(then)

    var minutesLeft = (then - now) / 60000;

    // this.setState({
    //   hour: Math.floor(minutesLeft / 60),
    //   minute: Math.floor(minutesLeft % 60),
    //   endTime: localStorage.endTime,
    // });

    if(this.state.hour === 0 && this.state.minute === 0) {
      clearInterval(this.state.intervalId);
    }

    if(this.state.hour < 0) {
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
    console.log
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
