import React from 'react'
import Navbar from './Components/Navbar'
import Nav2 from './Components/Nav2'
import { useState } from 'react'
const App = (props) => {

  const [theme, setTheme] = useState('Sheryians')
  return (
    <div>
      <Navbar theme={theme} />
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default App
