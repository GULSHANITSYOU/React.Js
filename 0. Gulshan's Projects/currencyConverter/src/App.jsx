import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const getData = useCallback(()=>{
  const [data,setdata] = useState(0);
  setInterval(()=>{
    setdata( data+1);
  },1000)
  return data;
 },[null]);
  

  return (
    <>
       <h1>Namste !!   </h1>
    </>
  )
}

export default App
