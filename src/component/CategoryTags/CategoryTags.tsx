'use client'

import { useState } from 'react'
import styles from './categorytags.module.scss'

interface CategoryTagsProp{
  categories?: {id: number, name: string}[]
  onClick?: (id: number) => void
  className?: string 
  error?: string
}

export default function CategoryTags({categories, onClick, className, error} : CategoryTagsProp){
  const [active, setActive] = useState<undefined|number>()

  function onClickTags(id: number){
    setActive(id)
    onClick && onClick(id)
  }
  return(
    <div className={styles.wrapper}>
      <div className={`${styles.categoryContainer} ${className}`}>
        {
          categories?.map(category => 
          <button
            key={'category'+category.id}
            className={`${styles.tags} ${category.id === active ? styles.active : ''}`}
            onClick={() => onClickTags(category.id)}
            >
            {category.name}
          </button>)
        }
      </div>
      <label className={styles.errorText}>{error}</label>
    </div>
  )
}