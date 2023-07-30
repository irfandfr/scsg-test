import styles from './belaundrylogo.module.scss'

export default function BelaundryLogo(){
   return(
    <div className={styles.logoContainer}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <h3 className={styles.titleText}>BeLaundry</h3>
    </div>
   )
}