import BalanceCard from '@/component/BalanceCard/BalanceCard'
import MainContainer from '@/component/MainContainer/MainContainer'
import styles from './homepage.module.scss'

export default function Home() {
  return (
    <MainContainer className={styles.homepage}>
      <h2 className={styles.welcomeText}>Welcome, John</h2>
      <BalanceCard />
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Previous Ordered</h3>
      </section>
    </MainContainer>
  )
}
