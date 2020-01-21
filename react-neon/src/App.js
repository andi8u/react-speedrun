import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
//state is inherited from component
  state = {
    persons: [
      {name: 'mimi'},
      {name: 'manu'}
    ],
    someOtherStateThatIsNotUpdated: 'stastsy'
  }

  switchNameHander = () =>
  {
    console.log("clicky");
    this.setState({  persons: [
      {name: 'mimuuuu'},
      {name: 'manuuuuu'}
    ]})
  }

  //all the react components need to have a render method that is called by react
  render() {
    return (
      //the code below is JSX not html
      //some words cannot be used like class
      //typically only one root element is returned in this case one div
     <div className="App">
        <button onClick={this.switchNameHander}>haha</button>
        <h1>Hi this is react neon tetra</h1>
        <Person name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default App;
//ctrl k s shortcuts