import Link from 'next/link'
import NoteIcon from '../icons/NoteIcon/NoteIcon'
import styles from './orderscard.module.scss'

export default function OrdersCard(){
  return(
    <div className={styles.orderCard}>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.details}>
          <span className={styles.name}>Bag of Laundry</span>
          <span className={styles.detail}>Total Order</span>
          <span className={styles.total}>$ {(180).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
        </div>
      </div>
      <Link href={'/history'} className={styles.nav}>
        <NoteIcon className={styles.icon}/>
        <span>invoice</span>
      </Link>
    </div>
  )
}