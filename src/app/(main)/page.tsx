import BalanceCard from '@/component/BalanceCard/BalanceCard'
import MainContainer from '@/component/MainContainer/MainContainer'
import OrdersCard from '@/component/OrdersCard/OrdersCard'
import styles from './homepage.module.scss'

export default function Home() {
  return (
    <MainContainer className={styles.homepage}>
      <h2 className={styles.welcomeText}>Welcome, John</h2>
      <BalanceCard />
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Previous Ordered</h3>
        <OrdersCard />
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Your Most Ordered</h3>
        <div className={styles.mostOrderedContainer}>
          <div className={styles.overlay}>
            <h5>Dry Cleaning</h5>
            <span>12x | Total of $ {(4000).toLocaleString()}</span>
          </div>
        </div>
      </section>
    </MainContainer>
  )
}
