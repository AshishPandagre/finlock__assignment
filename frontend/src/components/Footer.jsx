import React from 'react'
import zaperon_icon from '../assets/zaperon_icon.png'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <span>Powered by</span>
        <img src={zaperon_icon} />
      </div>
      <div className={styles.right}>
        <a href='#'>Need help?</a>
        <a href='#'>Privacy Policy <span>&</span> Terms</a>
      </div>
    </div>
  )
}

export default Footer