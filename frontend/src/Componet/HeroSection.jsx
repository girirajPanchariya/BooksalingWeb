import axios from 'axios'
import Cart from '../Cart'

const HeroSection = () => {
  
  return (
    <div>
    <div>
      <h1 className='text-3xl font-bold text-center mt-10'>Welcome to our Book Selling Platform</h1>
      <p className='text-center mt-4 text-lg'>Discover a wide range of books at your fingertips. Whether you're looking for the latest bestsellers or timeless classics, we've got you covered. Start exploring our collection today!</p>
    </div>
    <div className='bg-gray-500 mt-15 h-auto pl-15 w-[100%]'>

      <Cart/>
    </div>
      </div>
  )
}

export default HeroSection