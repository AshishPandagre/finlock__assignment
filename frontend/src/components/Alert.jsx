import React from 'react'
import styles from './Alert.module.css'

const Alert = ({message}) => {
  return (
    <div className={styles.alert}>{message}</div>
  )
}

export default Alert