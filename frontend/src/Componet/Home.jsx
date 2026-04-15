import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden bg-blue-500'>
      <Header/>
      <HeroSection/>
    </div>
  )
}

export default Home