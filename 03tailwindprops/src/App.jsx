import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name : 'preeti',
    age : 22,
    email : 'palpreeti@gmail.com'
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind css | preeti</h1>
    <Card username="preeeti pal" btn="click here" obj={myObj}/>
     <Card username="preeeti" />
    </>
  )
}

export default App
