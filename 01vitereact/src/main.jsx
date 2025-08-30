import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Code from './code.jsx'

createRoot(document.getElementById('root')).render(
 <div>
   <App />
   <Code />
 </div>
 
)
