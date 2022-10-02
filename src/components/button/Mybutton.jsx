import React from 'react';
import { But } from './myButton.js';

const Mybutton = (props) => {
  return <But>{props.children} </But>;
};

export default Mybutton;
