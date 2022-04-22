import './App.css';

const Button = ({handle, name, color}) => {
  return (
  <button type='button' className='button' onClick={()=>{handle(color)}}>{name}</button>
)}

export default Button;
