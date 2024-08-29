import React from 'react'
import { Link } from 'react-router-dom'
import iconCart from "../assets/images/iconCart.png"

const header = () => {
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link  to="/" className='text-xl font-semibold'>Home.</Link>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
           <img src={iconCart} alt='' className='w-6' />
           <span className='absolute top-0 right-0 bg-red-500 text-white tyext-sm w-4 h-4 rounded-full flex justify-center items-center'>0</span>
        </div>
    </header>
  )
}

export default header