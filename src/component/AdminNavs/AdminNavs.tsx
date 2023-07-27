import Link from "next/link";
import BelaundryLogo from "../icons/BelaundryLogo";

export default function AdminNavs(){
  return(
    <nav>
      <Link href={'/secret/admin'}>
        <BelaundryLogo />
      </Link>
    </nav>
  )
}