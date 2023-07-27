import styles from './burgermenu.module.scss'

interface BurgerMenuProp{
  active? : boolean
}

export default function BurgerMenuIcon({active} : BurgerMenuProp){
  return(
    <div className={`${styles.burgerMenu} ${active ? styles.active : ''}`}>
      <div className={`${styles.bar} ${styles.bar1}`}></div>
      <div className={`${styles.bar} ${styles.bar2}`}></div>
      <div className={`${styles.bar} ${styles.bar3}`}></div>
    </div>
  )
}