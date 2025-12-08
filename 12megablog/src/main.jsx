import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import {Provider} from 'react-redux'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: < App/>,
    children:[{
      path:"/",
      element: < Home/>
    },{
       path: "/login",
       element: (
        <AuthLayout  authentication ={false}>
          <Login/>
        </AuthLayout>
       )
    }
    ,{
       path: "/signup",
       element: (
        <AuthLayout  authentication ={false}>
          <Signup/>
        </AuthLayout>
       )
    },{
       path: "/all-post",
       element: (
        <AuthLayout  authentication>
          {" "}
         <AllPosts/>
        </AuthLayout>
       )
    },{
       path: "/add-post",
       element: (
        <AuthLayout authentication>
          {" "}
         <AddPost/>
        </AuthLayout>
       )
    },{
       path: "/edit-post/:slug",
       element: (
        <AuthLayout authentication>
          {" "}
          < EditPost/>
        </AuthLayout>
       )
    },{
      path: "/post/:slug",
      element: <Post/>
    }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
