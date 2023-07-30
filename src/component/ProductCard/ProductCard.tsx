import Link from "next/link";

import styles from './productcard.module.scss'

interface ProductCardProp{
  id: number
  image?: string
  category: string
  name: string
  price: number
  created_at: string
}

export default function ProductCard({id,image,category,name,price, created_at}:ProductCardProp){
  
  function isNew(){
    let date = new Date(created_at)
    let component = <span style={{width: '6px'}}></span>
    if(date instanceof Date ){
      let diffDays = Math.floor(Math.abs((new Date()).getTime() - date.getTime()) / (1000 * 3600 * 24))
      if(diffDays < 7){//if created less than a week classified as new
        component = <span className={styles.new}></span>
      }
    }
    return component
  }
  return(
    <Link
      href={`/product/${id}`}
      className={styles.productCard}
      style={{backgroundImage :`url(${image})`}}
    >
      <div className={styles.overlay}>
        <span className={styles.category}>
          {isNew()}
          {category}
        </span>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>$ {parseInt(`${price}`).toLocaleString(undefined,{minimumFractionDigits:2})} /pc</span>
      </div>
    </Link>
  )
}