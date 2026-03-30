import React from 'react'
import Header from '../Header'

const Register = () => {
  return (
    <div className='bg-gray-700 h-screen w-screen'>
      <Header/>
      <div className='h-auto w-auto flex col-auto justify-center py-1'>
          <form className='h-110 w-1/3 bg-gray-300 flex flex-col px-2 rounded-sm pl-4' action="">
            <h1 className=' font-bold text-lg text-center '>This is for Register Form</h1>
             <label className='font-semibold'>Email</label>
          <input 
            type="Email" 
            placeholder='Enter your Email'
            className='p-2 rounded border border-gray-400'
          />
            <label className='font-semibold'>Name</label>
          <input 
            type="text" 
            placeholder='Enter your name'
            className='p-2 rounded border border-gray-400'
          />
            <label className='font-semibold'>Password</label>
          <input 
            type="password" 
            placeholder='Enter your password'
            className='p-2 rounded border border-gray-400'
          />
            <label className='font-semibold'>Address</label>
          <input 
            type="text" 
            placeholder='Enter your name'
            className='p-2 rounded border border-gray-400'
          />
             <label className='font-semibold'>phoneNumber</label>
          <input 
            type="number" 
            placeholder='Enter your phone number'
            className='p-2 rounded border border-gray-400'
          />
          <button className='h-1/10 w-1/4 ml-35  flex justify-center items-center border border-black mt-10 bg-green-300 '>submit</button>
          </form>
        </div>      
    </div>
  )
}

export default Register