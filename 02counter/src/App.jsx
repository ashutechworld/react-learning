import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const counter = 15

  let  [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)

  }


  const removeValue = () => {
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>Chai our react</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue}>Add Value: {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <p>footer: {counter}</p>
    </> 
    
  )
}

export default App
