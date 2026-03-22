import React from 'react'
<<<<<<< HEAD
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
=======
import { Route, Routes } from 'react-router-dom'
import Home from './Componetes/Pages/Home'
import Register from './Componetes/Pages/Register'
import LoginPage from './Componetes/Pages/LoginPage'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<LoginPage/>}/>
   </Routes>

  )
}

export default App
>>>>>>> 8b5693da49838ff7bd6a6e720bed888783bef530
