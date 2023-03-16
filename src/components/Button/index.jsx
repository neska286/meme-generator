import React from 'react'
import styles from './button.module.css'

const Button = () => {
  return (
    <div className={styles.buttonWrapper}>
    <button type="submit">Get a new meme image  🖼</button>
    </div>
  )
}

export default Button