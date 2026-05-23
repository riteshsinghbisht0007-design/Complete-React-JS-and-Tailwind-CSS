import React from 'react'
import styles from "../header/Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className='{styles.logo}'>Ritesh</h3>
      <button className={styles.button}>Login</button>
    </div>
  )
}

export default Header
