import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './UserContext/AuthContext'
import axios from 'axios'

const Header = () => {

  const {user,logout} = useAuth()

  const handleLogout = async() => {
    try {
      const res = await axios.get('http://localhost:5000/user/logout', {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials:true  
      })
      // logout()
      alert(res.data.message)
     
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message)
      
    }
    // this is good prectice for logout because this is for restatring over app the work prefectly
    logout()
  }
  
  return (
    <div className='w-screen h-14 bg-green-300 grid grid-cols-3 items-center px-4'>
      
      <h1 className='font-bold text-2xl transition-all duration-700 hover:pl-4 hover:pb-1 hover:font-extrabold cursor-pointer'>
       <Link to={"/"}>Booksaling</Link> 
      </h1>
      
      <div className='text-center'>
        <h1><Link to={`/post`}>PostBook</Link></h1>
      </div>
 
      {/* User Section */}
      <div className='flex justify-end relative group'>
        
<h1>{user?.name || user?.Name || 'User'}</h1>
    <ul className=' absolute top-4 right-0 bg-white shadow-lg rounded-md w-32 opacity-0 hover:opacity-100 tra'>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/login">Login</Link></li>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/" onClick={handleLogout}>Logout</Link></li>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/Singup">Register</Link></li>
        <li className='p-3 hover:cursor-pointer border-2  border-blue-300 rounded-lg bg-cover'><Link to="/UserProfile">Profile</Link></li>
    </ul>

      </div>

    </div>
  )
}

export default Header