import styles from './admincard.module.scss'

interface AdminCardProp{
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function AdminCard( {children, className, onClick} : AdminCardProp){
  return(
    <div className={styles.adminCard +' '+className} onClick={onClick} >
      {children}
    </div>
  )
}