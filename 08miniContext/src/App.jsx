import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <div>preeti with context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
