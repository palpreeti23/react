import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
import User from './components/user/User.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'about',
        element : <About />,
      }
      ,
      {
        path : 'contact',
        element : <Contact />
      },
      {
        loader: githubInfoLoader,
        path : 'github',
        element : <Github />
      },
      {
        path : 'user/:userId',
        element : <User />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
