import Link from "next/link";
import BelaundryLogo from "../icons/BelaundryLogo/BelaundryLogo";
import BurgerMenuIcon from "../icons/BurgerMenuIcon/BurgerMenuIcon";

import styles from './adminnavs.module.scss'

export default function AdminNavs(){
  return(
    <nav className={styles.adminNavs}>
      <div className={styles.linkNavs}>
        <Link href={'/secret/admin'}>
          <BelaundryLogo />
        </Link>
        <BurgerMenuIcon />
      </div>
      <div className={styles.headerNav}></div>
    </nav>
  )
}