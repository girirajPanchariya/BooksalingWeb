import React, { useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {

  const [formData, setFormData] = useState({
    email: '',
    Name: '',
    password: '',
    address: '',
    phoneNo: '',
    otp: ''
  })


   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // ✅ Send OTP
  const sendOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/user/Register', {
        email: formData.email
      })
      alert(res.data.message)
    } catch (error) {
      alert(error.response?.data?.message)
    }
  }

  // ✅ Register User
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/user/Register', formData)

      alert(res.data.message)

      setFormData({
        email: '',
        Name: '',
        password: '',
        address: '',
        phoneNo: '',
        otp: ''
      })

    } catch (error) {
      alert(error.response?.data?.message)
    }
  


  }
  return (
    <div className='bg-gray-700 h-screen w-screen'>
      <Header />
      <div className='h-auto w-auto flex col-auto justify-center py-1'>
        <form className='h-140 w-1/3 bg-gray-300 flex flex-col px-2 rounded-sm pl-4' action="">
          <h1 className=' font-bold text-lg text-center '>This is for Register Form</h1>
          <label className='font-semibold'>Email</label>
          <div className='flex justify-around'>
            
          <input
            type="Email"
            placeholder='Enter your Email'
              onChange={handleChange}
              name='email'
              value={formData.email}
            className='p-2 rounded border border-gray-400 w-1/1'
          />
          <button className='hover:cursor-pointer bg-cyan-800 w-1/4 rounded-sm p-1 m-1' type="button" onClick={sendOtp}>Send OTP</button>
          </div>

          <label className='font-semibold'>OTP</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.otp}
             name="otp"
            placeholder='Enter your Otp'
            className='p-2 rounded border border-gray-400'
          />
          <label className='font-semibold'>Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.Name}
             name="Name"
            placeholder='Enter your name'
            className='p-2 rounded border border-gray-400'
          />
          <label className='font-semibold'>password</label>
          <input
            type="password"
            onChange={handleChange}
            value={formData.password}
             name="password"
            placeholder='Enter your password'
            className='p-2 rounded border border-gray-400'
          />
          <label className='font-semibold'>address</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.address}
             name="address"
            placeholder='Enter your address'
            className='p-2 rounded border border-gray-400'
          />
          <label className='font-semibold'>phoneNo</label>
          <input
            type="number"
            onChange={handleChange}
            value={formData.phoneNo}
             name="phoneNo"

            placeholder='Enter your phone number'
            className='p-2 rounded border border-gray-400'
          />
          <button onClick={handleSubmit} className='h-1/10 w-1/4 ml-35  flex justify-center items-center border border-black mt-5 bg-green-300 '>Register</button>
          <Link className=' text-blue-900 ml-20 ' to="/login">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Register