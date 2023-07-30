import styles from './balancecard.module.scss'

export default function BalanceCard(){
  return(
    <div className={styles.balanceCard}>
      <div className={styles.overlay}>
        <div className={styles.belaundryOverlay}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>
        <div className={styles.details}>
          <h5>Your Balance</h5>
          <h3>$ {(200).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:5})}</h3>
        </div>
      </div>
    </div>
  )
}