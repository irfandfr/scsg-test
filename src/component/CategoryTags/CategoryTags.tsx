'use client'

import { useState } from 'react'
import styles from './categorytags.module.scss'

interface CategoryTagsProp{
  categories?: {id: string, name: string}[]
  onClick?: (id: string) => void
  className?: string 
}

export default function CategoryTags({categories, onClick, className} : CategoryTagsProp){
  const [active, setActive] = useState('')

  function onClickTags(id: string){
    setActive(id)
    onClick && onClick(id)
  }
  return(
    <>
      <label className={styles.label}>Category</label>
      <div className={styles.categoryContainer}>
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
    </>
  )
}