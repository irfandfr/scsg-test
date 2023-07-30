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

export default function ProductCard({id,image,category,name,price}:ProductCardProp){
  return(
    <Link
      href={`/product/${id}`}
      className={styles.productCard}
      style={{backgroundImage :`url(${image})`}}
    >
      <span className={styles.category}>{category}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>$ {parseInt(`${price}`).toLocaleString(undefined,{minimumFractionDigits:2})} /pc</span>
    </Link>
  )
}