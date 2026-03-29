import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Componet/Home'
import Register from './Componet/pages/Register'
import UserProdefile from './Componet/pages/UserProdefile'
import Login from './Componet/pages/Login'

const App = () => {

const AppRouter = createBrowserRouter([

    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/Singup',
      element:<Register/>
    },
    {
      path:'/UserProfile',
      element:<UserProdefile/>
    },
    {
      path:'/login',
      element:<Login/>
    }

]) 

  return (
    <div>
      <RouterProvider router={AppRouter}/>

    </div>
  )
}

export default App