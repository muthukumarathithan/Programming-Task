import React, { Component } from 'react';
import TestComponents from './Components/components.js';
import StateToprops from './Components/stateToprops.js';
import TestFunction from './Components/function.js';
import Times from './Components/Times.js';
import Todo from './Components/Todo.js'

 class App extends Component {
  render() {
    return (
      <div>
       Hello World
       <TestComponents country="India"/>
       <StateToprops country="Pakistan"/>
       <TestFunction />
       <Times/>
       <Todo/>
      </div>
    )
  }
}
export default App;
