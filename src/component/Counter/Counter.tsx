'use client'

import { type } from "os"
import { useState } from "react"
import TextForm from "../TextForm/TextForm"

import styles from './counter.module.scss'

export default function Counter(){
  const [counter, setCounter] = useState(0)
  function count(type : 'increment' | 'decrement'){
    if(type === 'increment'){
      setCounter(p => p + 1)
    }else if(type === 'decrement'){
      if(counter > 0){
        setCounter(p => p - 1)
      }
    }
  }
  return(
    <div className={styles.counterContainer}>
      <button className={styles.button} onClick={() => count('decrement')}>-</button>
      <div className={styles.counter}>{counter}</div>
      <button className={styles.button} onClick={() => count('decrement')}>+</button>
    </div>
  )
}