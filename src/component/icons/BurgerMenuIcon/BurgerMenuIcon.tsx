import styles from './burgermenu.module.scss'

interface BurgerMenuProp{
  open? : boolean
  onClick?: () => void
}

export default function BurgerMenuIcon({open, onClick} : BurgerMenuProp){
  return(
    <button className={`${styles.burgerMenu} ${open ? styles.active : ''}`} onClick={onClick}>
      <div className={`${styles.bar} ${styles.bar1}`}></div>
      <div className={`${styles.bar} ${styles.bar2}`}></div>
      <div className={`${styles.bar} ${styles.bar3}`}></div>
    </button>
  )
}