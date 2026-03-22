import React from 'react'
import Home from './Coponets/Pages/Home'
import Register from './Coponets/Pages/Register'
import { Route, Routes } from 'react-router-dom'
const App = () => {


  return (
        
    
        <Routes>
          <Route path='/' element  = {<Home/>}/>
           <Route path='/Register' element  = {<Register/>}/>

        </Routes>
  )
}

export default App