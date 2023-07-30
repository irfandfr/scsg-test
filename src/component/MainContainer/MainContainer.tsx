import styles from './maincontainer.module.scss'

interface MainContainerProps{
  children: React.ReactNode
  className?: string
}

export default function MainContainer({children, className}:MainContainerProps){
  return(
    <main className={`${styles.mainContainer} ${className}`}>
      {children}
    </main>
  )
}