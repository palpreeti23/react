import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Code from './code.jsx'
import React from 'react'



// const RenderElement ={
//     type : "a",
//     props:{
//         href : "https://www.google.com/",
//         target : "blank"
//     },

//     Children : "click here to open google"
// }


const RenderElement = React.createElement(
  'a',
  {href:' https://google.com', 
    target : 'blank'},
    'visit here'
)
const anotherElement = (
  <a href="https://google.com" target="blank">visit google by clicking here</a>
)

function MyApp(){
  return(
    <div>
   <h2>this is preeti</h2>
   <p>this is a small para</p>
    </div>
   
     
  )
}


createRoot(document.getElementById('root')).render(
//  <div>
//    <App />
//    <Code />
//    <MyApp />
//    MyApp()
//  </div>
  // MyApp()



// anotherElement,
  RenderElement
)
