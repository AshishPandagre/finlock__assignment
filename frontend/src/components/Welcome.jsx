import React from 'react'
import UserIcon from '../assets/user_icon.svg'
import styles from './Welcome.module.css'

const Welcome = ({name}) => {
  return (
    <div className={styles.welcome}>
      <div className={styles.user__icon__container}>
        <img className={styles.user__icon} src={UserIcon} />
      </div>
      <h1 className={styles.welcome__text}>Welcome {name && name} !</h1>
    </div>
  )
}

export default Welcome
