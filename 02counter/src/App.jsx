import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10
  let [counter, setCounter] = useState(10);


    let addValue = ()=>{
      if(counter != 20){

        setCounter(counter + 1)
      }
     
    }

    let removeValue = ()=>{

      if(counter != 0){
 
        setCounter(counter - 1)
      }
     
    }

  return (
    <>
    <h1>set counter</h1>
    <h2>value {counter}</h2>

    <button onClick={addValue}>add value {counter}</button>

     <br />
    <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
