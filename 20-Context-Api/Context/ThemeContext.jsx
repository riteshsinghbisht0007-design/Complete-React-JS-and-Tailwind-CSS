import React from 'react'
import { createContext } from 'react'


export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <ThemeDataContext.Provider value={props.theme} >
      {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext
