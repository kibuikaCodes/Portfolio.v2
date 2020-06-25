import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import '../App.css';
 
const Typer = () => {
  return (
    <ReactTypingEffect
      text={["Hello.", "Ola.", "Habari.", "Niaje."]}
      className='typing-text'
      speed={300}
    />
  );
};

export default Typer;