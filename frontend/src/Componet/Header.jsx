import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-screen h-14 bg-green-300 grid grid-cols-3 items-center px-4'>
      
      {/* Logo */}
      <h1 className='font-bold text-2xl transition-all duration-700 hover:pl-4 hover:pb-1 hover:font-extrabold cursor-pointer'>
       <Link to={"/"}>Booksaling</Link> 
      </h1>

      {/* Center (empty or future nav) */}
      <div className='text-center'>
        {/* You can add nav links here */}
      </div>
 
      {/* User Section */}
      <div className='flex justify-end relative group'>
        <h1 className='cursor-pointer font-medium'>User</h1>

    <ul className=' absolute top-4 right-0 bg-white shadow-lg rounded-md w-32 opacity-0 hover:opacity-100 tra'>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/login">Login</Link></li>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/">Logout</Link></li>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/Singup">Register</Link></li>
    </ul>

      </div>

    </div>
  )
}

export default Header