import React from 'react';
import './Person.css'; //this are injected by webpack and are prefixed for browser compatibility

//props is passed default by react
//react sends this object by default and is is filled with the attributest where the component is used
//eg: <Person name="dudu" />
//other components can be passed here as props
//this is a functional component and is stateless => cannot and will not change the props 
//use as many times as possible this is preferred these are dumb presentational componenrs
/*
events are camelcase
to cancel the default behavior you can call e.preventDefault()
e is a synthetic event and offers cross browser compatibility

*/
const person = (props) => { 
   //apelarea de componenta se face dar rerandare nu daca nu sunt diferente
   return (
      <div className="Person">
         <p>I'm a fish named {props.name}, mate here's my random weight grams</p> 
         <p>the passed props: {props.children}</p>
         <button onClick={props.click}> delete  </button>
         
      <input type="text" onChange={props.inputChange} value={props.name}></input> //2way binding
   </div>)
}

export default person;