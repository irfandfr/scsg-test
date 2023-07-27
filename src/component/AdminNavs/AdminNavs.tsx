'use client'

import Link from "next/link";
import { useState } from "react";
import BelaundryLogo from "../icons/BelaundryLogo/BelaundryLogo";
import BurgerMenuIcon from "../icons/BurgerMenuIcon/BurgerMenuIcon";

import styles from './adminnavs.module.scss'
import LinkContainer from "./LinkContainer";


const links = [
  {link: '/secret/admin', title: 'Home',exact:true},
  {link: '/secret/admin/products', title: 'Products'},
  {link: '/secret/admin/sales', title: 'Sales'},
]
export default function AdminNavs(){
  const [openNav, setOpen] = useState(false)
  return(
    <nav className={styles.adminNavs}>
      <div className={styles.linkNavs}>
        <Link href={'/secret/admin'}>
          <BelaundryLogo />
        </Link>
        <button onClick={() => setOpen(prev => !prev)} className='md-hide'>
          <BurgerMenuIcon active={openNav} />
        </button>
        <LinkContainer links={links} open={openNav} />
      </div>
      <div className={styles.headerNav}></div>
    </nav>
  )
}