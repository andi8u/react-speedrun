import React from 'react';
//props is passed default by react
const person = (props) => {
   return <p>I'm a fish named {props.name}, mate {Math.random()}</p> 
}

export default person;