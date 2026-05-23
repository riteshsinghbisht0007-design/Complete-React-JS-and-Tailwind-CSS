import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='text-4xl font-bold justify-center   text-center align-center'>
      <div className='flex gap-4 justify-center  text-center align-center mt-60'>

        <Link className='text-2xl font-bold justify-center  text-center align-center' to='/Product/Men' >
          Men
        </Link>
        <Link className='text-2xl font-bold justify-center  text-center align-center' to='/Product/Women' >
          Women
        </Link>

      </div>
      PRODUCT PAGE

    </div>
  )
}

export default Product
