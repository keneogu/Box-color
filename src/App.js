import React, { useState } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel'

function App() {

  const [value, setValue] = useState('black')

  const classValue = (classNameValue) => {
    if (classNameValue === 'red') {
      return classNameValue
    }
    if (classNameValue === 'blue') {
      return classNameValue
    }
    if (classNameValue === 'brown') {
      return classNameValue
    }
  }
  const handleClick = (colour) => {
    setValue(classValue(colour))
  }
  return (
    <div className="App">
      <div className={value} ></div>
      <ButtonPanel clickHandle={handleClick} />
    </div>
  );
}

export default App;
