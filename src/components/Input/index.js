import React from 'react'
import styles from './styles.module.css'

const Input = (className, ...props) => {
  return <input className={`${styles.green} ${className || ''}`} {...props} />
}
export default Input
