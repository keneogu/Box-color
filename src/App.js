import React from 'react';
import './App.css';
import Button from './Button';

function App() {

  const [value, setValue] = React.useState('')

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
      <div className={value} data-testid='show'></div>
      <ButtonPanel clickHandle={handleClick} />
    </div>
  );
}

const ButtonPanel = ({clickHandle}) => {
  const panel = ({ name, color }) => < Button handle={clickHandle} name={name} color={color} />
  return (
    <div className='button-panel'>
      {panel({name: 'red', color: 'red'})}
      {panel({name: 'blue', color: 'blue'})}
      {panel({name: 'brown', color: 'brown'})}
    </div>
  )
}

export default App;
