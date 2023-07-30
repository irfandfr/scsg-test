'use client'

import { useState } from "react"

import styles from './counter.module.scss'
interface CounterProp{
  className? : string
}


export default function Counter({className}: CounterProp){
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
    <div className={`${styles.counterContainer} ${className}`}>
      <button className={styles.button} onClick={() => count('decrement')}>-</button>
      <div className={styles.counter}>{counter}</div>
      <button className={styles.button} onClick={() => count('increment')}>+</button>
    </div>
  )
}