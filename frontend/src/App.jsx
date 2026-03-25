import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Componet/Home'
import Register from './Componet/pages/Register'
import UserProdefile from './Componet/pages/UserProdefile'

const App = () => {

const AppRouter = createBrowserRouter([

    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/login',
      element:<Register/>
    },
    {
      path:'/Register',
      element:<UserProdefile/>
    },
]) 

  return (
    <div>
      <RouterProvider router={AppRouter}/>

    </div>
  )
}

export default App