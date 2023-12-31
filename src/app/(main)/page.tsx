import BalanceCard from '@/component/BalanceCard/BalanceCard'
import MainContainer from '@/component/MainContainer/MainContainer'
import OrdersCard from '@/component/OrdersCard/OrdersCard'
import styles from './homepage.module.scss'
import LatestProducts from './LatestProducts'

export default function Home() {
  return (
    <MainContainer className={styles.homepage}>
      <div className={styles.personal}>
        <div style={{flexGrow: 2}}>
          <h2 className={styles.welcomeText}>Welcome, John</h2>
          <BalanceCard />
        </div>
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
      </div>
      <section className={`${styles.section} ${styles.product}`}>
        <h3 className={styles.sectionTitle}>Our Latest Product</h3>
        <LatestProducts />
      </section>
    </MainContainer>
  )
}
