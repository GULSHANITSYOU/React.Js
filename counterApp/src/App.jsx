import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function IncreaseCount(){
    setCount(count+1);
    console.log(count);
  }

  function DecreaseCount(){
    setCount(count-1); 
    console.log(count);
  }

  // Determine the color based on the count
  let color;
  if (count > 0) {
    color = 'green';
  } else if (count < 0) {
    color = 'red';
  } else {
    color = 'white';
  }

  return (
    <>
    <h1 style={{ color: color }}>Count is : {count}</h1>
    <button onClick={IncreaseCount}>Increase : {count}</button>
    <button onClick={DecreaseCount}>Decrease : {count}</button>
    <button onClick={()=>{setCount(0)}}>Reset : {count}</button>
    </>
  )
}

export default App
