import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(20)

  const addVlaue = () => {
    setCounter(prevCounter => prevCounter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }
  return(
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addVlaue}>Add value{counter}</button> <br />

    <button onClick={removeValue}>Remvoe vlaue{removeValue}</button>

    <p>footer: {counter}</p>
    </>
  )
}

export default App
