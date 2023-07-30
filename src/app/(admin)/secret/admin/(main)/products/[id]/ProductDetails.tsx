import { ProductDataProp } from '@/component/types/types'
import styles from './productpage.module.scss'

interface ProductDetailsProp{
  data : ProductDataProp
}


export default function ProductDetails({data} : ProductDetailsProp){

  function renderTableItem(product: ProductDataProp, key:string){
    switch (key) {
      case 'price':
        return `$ ${product[key as keyof typeof product].toLocaleString(undefined, {minimumFractionDigits: 2})}`
      case 'image':
        return <div className={styles.image} style={{backgroundImage: `url(${product[key]})`}}></div>
      default:
        let val = product[key as keyof typeof product]
        return val === '' || typeof val === 'undefined' || !val ? '-' : val 
    }
  }
  return(
    <div className={styles.detailsContainer}>
      <table className={styles.table}>
        <tbody>
          {
            Object.keys(data).map(key => 
            <tr key={key} className={styles.row}>
              <td className={styles.title}>{key.split('_').join(' ')}</td>
              <td>:</td>
              <td>{renderTableItem(data, key)}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
