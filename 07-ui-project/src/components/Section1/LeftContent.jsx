import React from 'react'
import { MoveUpRight } from 'lucide-react';
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      <div className='p-4  '>
        <h3 className='mb-7 leading-[1.1] text-6xl font-bold'>Prospective <br /><span className='text-gray-600 '>customer</span> <br /> segmentation</h3>

        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
      </div>
      <div className='text-9xl'>
        <MoveUpRight />
      </div>
    </div>
  )
}

export default LeftContent
