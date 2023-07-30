'use client'

import { useState } from 'react'
import styles from './categorytags.module.scss'

interface CategoryTagsProp{
  categories?: {id: number, name: string}[]
  onClick?: (id: number) => void
  className?: string 
}

export default function CategoryTags({categories, onClick, className} : CategoryTagsProp){
  const [active, setActive] = useState<undefined|number>()

  function onClickTags(id: number){
    setActive(id)
    onClick && onClick(id)
  }
  return(
    <>
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