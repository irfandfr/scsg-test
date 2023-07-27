import styles from './admincontainer.module.scss'

interface MainAdminContainerProps{
  children: React.ReactNode
}

export default function MainAdminContainer({children}:MainAdminContainerProps){
  return(
    <main className={styles.adminMain}>
      {children}
    </main>
  )
}