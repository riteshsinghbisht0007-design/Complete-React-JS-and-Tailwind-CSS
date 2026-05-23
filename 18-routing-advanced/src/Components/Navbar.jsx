import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8  bg-cyan-800 justify-between '>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-8'>
        <Link to="/" className='text-xl font-bold '>
          Home
        </Link>
        <Link to="/about" className='text-xl font-bold '>
          About
        </Link>
        <Link to="/Product" className='text-xl font-bold '>
          Product
        </Link>
        <Link to="/courses" className='text-xl font-bold '>
          Courses
        </Link>
      </div>
    </div>
  )
}

export default Navbar
