import React, { Component } from 'react';
import './App.css'; //the CSS needs importing as well, webpack feature
import Person from './Person/Person'
//import with uppercase

//all the components will be contained in this root component
//this is a class component
class App extends Component {

  //state is inherited from component, hooks have the same role but can be managed in functional components aswell
  //state should be used with care and only for things we absolutely need THE STATE TOGETHER WITH COMPONENT PROPS
  // ARE THE ONLY THINGS THAT TRIGGER A RE-RENDER
  state = {
    persons: [
      { name: 'mimi' },
      { name: 'manu' },
      { name: 'nina' }
    ],
    someOtherStateThatIsNotUpdated: 'stastsy',
    showPersons: false
  }

  switchNameHander = (newname) => {
    console.log("clicky");
    //this because of es2015 refers this to the current object
    //set state merges the states and keeps someOtherStateThatIsNotUpdated 
    //vs hooks which replace with a new version
    /* 
    always use setState() and do not set the state directly 
    the state can update asycnhronously and do when setting the state do not rely on previous state values

    // Correct - previous state and the props at the time of the update
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));

    the state is owned by a component and can only affect components lower
    "a component tree as a waterfall of props, 
    each component’s state is like an additional water source that joins it at an arbitrary point 
    but also flows down"
    */
    this.setState({
      persons: [
        { name: newname },
        { name: 'manuuuuu' }
      ]
    })
  }

  inputChanged = event => {
    this.setState({
      persons: [
        { name: event.target.value },
        { name: 'manuuuuu' },
        { name: 'nina' }
      ]
    })
  }
  //this way of writing "()=>"the function always makes sure that this references the class
  togglePersonsHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({ showPersons: !isShowing });
  }



  // #all the react components need to have a render method that is called by react
  render() {
    //inline style reusable components with own style in this way the style is scoped to the component
    // is not global like the other files
    const style = {
      background: 'blue'
    };

    return (
      //the code below is JSX not html - so actually JS
      //some words cannot be used like class that is why we use "className" camel case instead of pascal case
      //typically only one root element is returned in this case one div
      //the code below can be done by hand with React.createElement and is transpiled with Babel to that version
      //this is how you can pass logic to component and execute business and maybe change the parents state
      //also properties can be passed as arguments to the methods
      //this is goes into props.children
      /*
      the JSX updates ONLY the UI element that needs updating by comparing the v=previous version with the current one
      component names should be uppercase so that they are not mistaken with DOM elements
      make components as small as possible
      
      bind(obj) - nesures that this reffers to the object passed and not where the function is executed
       Events should be bound. Generally, if you refer to a method without () after it, 
       such as onClick={this.handleClick}, you should bind that method.
       We generally recommend binding in the constructor or using the class fields syntax
      */
      /** */
      <div className="App">
        <h1>Hi this is neon tetra</h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>haha</button>


        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              height="108"
              click={this.switchNameHander.bind(this, 'somenewname')}
              inputChange={this.inputChanged}>
            </Person>

            <Person name={this.state.persons[1].name}>wohoo</Person>

            <Person name={this.state.persons[2].name}>wohoo</Person>
          </div> : null
        }
      </div>
    );
  }
}

//
export default App;
//ctrl k s shortcuts