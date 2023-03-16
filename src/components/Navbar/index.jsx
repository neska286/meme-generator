import React from 'react'
import styles from './navbar.module.css'
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <img src={Logo} alt="logo" width="31" height="26"/>
        <span>Meme Generator</span>
        
        </div>
  )
}

export default Navbar