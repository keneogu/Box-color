import './App.css';
import Button from './Button';

const ButtonPanel = ({clickHandle}) => {
  const panel = ({ name, color }) => < Button handle={clickHandle} name={name} color={color} />
  return (
    <div className='button-panel'>
      {panel({name: 'Red', color: 'red'})}
      {panel({name: 'Blue', color: 'blue'})}
      {panel({name: 'Brown', color: 'brown'})}
    </div>
  )
}

export default ButtonPanel;
