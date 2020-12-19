import React, { Component } from 'react';
import TestComponents from './Components/components.js';
import StateToprops from './Components/stateToprops.js';
import TestFunction from './Components/function.js';
import Times from './Components/Times.js';
import Todo from './Components/Todo.js';
import Toggle from './Components/Toggle.js';
import JSXexample from './Components/JSXexample.js';
import  MultipleComponent from './Components/MultipleComponent.js';
import ComponentsApi from './Components/ComponentsApi.js'
import Lifecycle from './Components/Lifecycle.js'

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
       <Toggle/>
       <JSXexample/>
       <MultipleComponent/>
       <ComponentsApi/>
       <Lifecycle/>
      </div>
    )
  }
}
export default App;
