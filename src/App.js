import React, { Component } from 'react';
import TestComponents from './Components/components.js';
import StateToprops from './Components/stateToprops.js';

 class App extends Component {
  render() {
    return (
      <div>
       Hello World
       <TestComponents country="India"/>
       <StateToprops country="Pak"/>
      </div>
    )
  }
}
export default App;
