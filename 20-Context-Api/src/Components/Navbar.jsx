import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = (props) => {
  const data = useContext(ThemeDataContext)
  return (
    <div className
      ='nav'>
      <h2>Sheryians</h2>
      <Nav2 theme={props.theme} />



    </div>
  )
}

export default Navbar
