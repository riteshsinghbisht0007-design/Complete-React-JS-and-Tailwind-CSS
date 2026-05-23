import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()
  const btnClicked = () => {
    navigate('/')
  }
  return (
    <>
      <div>
        <button className='font-medium bg-emerald-500 px-5 py-2 rounded m-2 cursor-pointer active:scale ' onClick={btnClicked}>
          Return to Home Page
        </button>

        <div className='text-2xl font-bold justify-center  text-center align-center'>

          About Page
        </div>
      </div >
    </>
  )
}

export default About
