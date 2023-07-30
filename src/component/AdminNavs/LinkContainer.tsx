'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserIcon from "../icons/UserIcon/UserIcon";

import styles from './adminnavs.module.scss'

interface LinkContainerProp{
  links : {
    link: string
    title: string
    exact?:boolean
    icon?: React.ReactNode
  }[]
  open: boolean
}

interface NavLinkProp{
  link: string
  title: string
  active:boolean
  icon?: React.ReactNode
}

//individual link components
const NavLink = ({link, title, active, icon} : NavLinkProp) => {
  return(
    <Link href={link} className={`${styles.linkStyle} ${active ? styles.active : ''}`}>
      {icon}
      {title}
    </Link>
  )
}


export default function LinkContainer({links, open} : LinkContainerProp){
  const pathname = usePathname()
  
  function isActiveLink(exact:boolean|undefined, link: string){
    if(exact){
      return link === pathname
    }else{
      return pathname.includes(link)
    }
  }

  return(
    <div className={`${styles.linkContainer} ${open ? styles.open : ''}`}>
      <div className={styles.wrapper}>
        <span className={styles.labelText}>Menu</span>
        {
          links.map(({link, title, exact, icon},index) => 
            <NavLink key={'link'+index} link={link} title={title} active={isActiveLink(exact,link)} icon={icon} />
          )
        }
        <div className={`${styles.userLink} md-hide`} style={{marginTop: 'auto'}}>
          <UserIcon className={styles.icon}/>
          <span className={styles.username}>John Doe</span>
        </div>
      </div>
    </div>
  )
}