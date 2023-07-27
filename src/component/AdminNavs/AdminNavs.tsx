'use client'

import Link from "next/link";
import { useState } from "react";
import BelaundryLogo from "../icons/BelaundryLogo/BelaundryLogo";
import BurgerMenuIcon from "../icons/BurgerMenuIcon/BurgerMenuIcon";
import ChartIcon from "../icons/ChartIcon/ChartIcon";
import FolderOpenIcon from "../icons/FolderOpenIcon/FolderOpenIcon";
import HomeIcon from "../icons/HomeIcon/HomeIcon";

import styles from './adminnavs.module.scss'
import LinkContainer from "./LinkContainer";


const links = [
  {link: '/secret/admin', title: 'Home',exact:true, icon:<HomeIcon />},
  {link: '/secret/admin/products', title: 'Products', icon:<FolderOpenIcon />},
  {link: '/secret/admin/sales', title: 'Sales', icon:<ChartIcon />},
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
      <div className={`${styles.headerNav} md-hide`}>

      </div>
    </nav>
  )
}