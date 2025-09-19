import { useState } from 'react'
import './App.css'
import userContextProvider from './context/UserContextProvider'

function App() {


  return (
    <userContextProvider>
      <div>preeti with context API</div>
      
    </userContextProvider>
  )
}

export default App
