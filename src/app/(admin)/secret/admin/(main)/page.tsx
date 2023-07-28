import SalesStatisticTable from "./SalesStatisticTable";
import styles from './adminhome.module.scss'
export default function AdminHome(){
  return(
    <>
      <div className={styles.wrapper}>
        <SalesStatisticTable />
      </div>
    </>
  )
}