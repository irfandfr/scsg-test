import { ProductDataProp } from "@/component/types/types";

import styles from './productpage.module.scss'

interface ProductDetailProps{
  data : ProductDataProp
}

export default function ProductDetails({data} : ProductDetailProps){
  return(
    <div className={styles.productContainer}>
      <div className={styles.imageContainer} style={{backgroundImage: `url(${data.image})`}}>
        <div className={styles.overlay}></div>
      </div>
      <span className={styles.category}>Dry Clean</span>
      <h1>{data.name}</h1>
      <h5>$ {data.price.toLocaleString(undefined, {minimumFractionDigits: 2})}/pc</h5>
      <p>{data.description}</p>
    </div>
  )
}