import React, { useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../UserContext/AuthContext'

const Login = () => {
  const navigate = useNavigate()

  const {login} = useAuth()
  const [user,setuser]= useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
        const res = await axios.post('http://localhost:5000/user/login',user,{
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials:true
        })

        login(res.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.user.token);
        navigate('/')

        alert(res.data.message)
    } catch (error) {
      console.log(error);
      
        alert(error.response?.data?.message)

    }
  }


  return (
    <div className='bg-gray-700 h-screen w-screen'>
      <Header/>
      <div className='h-auto w-auto flex col-auto justify-center py-1'>
          <form onSubmit={handleSubmit} className='h-80 w-1/3 bg-gray-300 flex flex-col px-2 rounded-sm pl-4' action="">
            <h1 className=' font-bold text-lg text-center '>This is for Login Form</h1>
             <label className='font-semibold'>Email</label>
          <input 
            type="Email"
            onChange={handleChange}
            value={user.email}
            name="email" 
            placeholder='Enter your Email'
            className='p-2 rounded border border-gray-400'
          />
            <label className='font-semibold mt-5'>Password</label>
          <input 
            type="password" 
            onChange={handleChange}
            value={user.password}
            name="password"

            placeholder='Enter your password'
            className='p-2 rounded border border-gray-400'
          />
          
          <button type='submit' className='h-1/10 w-1/4 ml-35  flex justify-center items-center border border-black mt-10 bg-green-800 ' >LoginUser</button>
          <Link className="text-blue-900 ml-20 '" to="/Singup">You have no any Account? Register</Link>
          </form>
        </div>      
    </div>
  )
}

export default Login