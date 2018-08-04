import React from 'react';

export const AppContext = React.createContext('plant');

export class AppProvider extends React.Component {
  state = {
   
  };

  

  test = () => {
    
  };

  // componentWillMount() {
  // }

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
