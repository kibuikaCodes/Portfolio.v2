import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import '../App.css';
 
const Typer = () => {
  return (
    <ReactTypingEffect
      text={["Hello.", "Hola.", "Ciao.","Habari.","Bonjour.", "你好", "Hallo", "Niaje."]}
      className='typing-text'
      speed={300}
    />
  );
};

export default Typer;