import React, { useEffect, useState } from 'react'
import { useAuth } from '../UserContext/AuthContext'
import axios from 'axios'
import Header from '../Header'

const UserProfile = () => {

  const { user, setUser } = useAuth()
  const [form,setform] = useState({
    Name: '',
    address: '',
    phoneNo: '',
  })

const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put('http://localhost:5000/user/update', form, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      alert(res.data.message)
      setUser(res.data.updateUser)
      setIsEditing(false)

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message)
    }
  }

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5000/user/profile',
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          }
        )

        setUser(res.data.userProfile)

      } catch (error) {
        console.log(error)
        alert(error.response?.data?.message)
      }
    }

    fetchUser()
  }, [setUser])

  useEffect(() => {
    if (user) {
      setform(prev => ({
        ...prev,
        Name: user.Name || user.name,
        address: user.address || '',
        phoneNo: user.phoneNo || ''
      }))
    }
  }, [user, setUser])

  return (
    <div className='min-h-screen bg-gray-100'>
      
      <Header />

      {/* Profile Section */}
      <div className='flex justify-center items-center mt-10'>
        
        <div className='bg-white shadow-xl rounded-2xl p-6 w-[350px] text-center hover:shadow-2xl transition-all duration-300'>
          
          {/* Profile Image */}
          <img
            className='w-28 h-28 mx-auto rounded-full object-cover border-4 border-green-300'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
            alt="profile"
          />

          {/* Name */}
          <h2 className='text-2xl font-bold mt-4'>
            {user?.name || user?.Name || 'User'}
          </h2>

          {/* Email */}
          <p className='text-gray-500 text-sm mt-1'>
            {user?.email}
          </p>

          {/* Divider */}
          <div className='border-t my-4'></div>

          {/* Details */}
          <div className='text-left space-y-2'>
            <p><span className='font-semibold'>📍 Address:</span> {user?.address || 'Not added'}</p>
            <p><span className='font-semibold'>📞 Phone:</span> {user?.phoneNo || 'Not added'}</p>
          </div>

          

          <button onClick={() => setIsEditing(true)} className='mt-5 w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-lg transition-all duration-300'>
            Edit Profile
          </button>

          {isEditing && (
            <form onSubmit={handleSubmit} className='mt-5 space-y-4 text-left'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type="text"
                  name="Name"
                  value={form.Name}
                  onChange={handleChange}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
                <input
                  type="text"
                  name="phoneNo"
                  value={form.phoneNo}
                  onChange={handleChange}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                
              </div>
              <button
                type="submit"
                className='w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-lg transition-all duration-300'
              >
                Update Profile
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  )
}

export default UserProfile