import React, { useState } from 'react';
import './styles/App.css';
import Header from './Header';

function App() {

  const [value, setValue] = useState('black')

  const classValue = (classNameValue) => {
    if (classNameValue === 'red' || 'blue' || 'brown') {
      return classNameValue
    }
  }

  const handleClick = (colour) => {
    setValue(classValue(colour))
  }

  return (
    <div className="app">
      <Header clickHandle={handleClick}/>
      <div className={value} ></div>
    </div>
  );
}

export default App;
