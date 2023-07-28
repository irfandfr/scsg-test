import SalesStatisticTable from "./SalesStatisticTable";
import styles from './adminhome.module.scss'
import TopSales from "./TopSales";

const filterSales = [
  {title: 'This week', value: 'week'},
  {title: 'This month', value: 'month'}
]

export default function AdminHome(){
  return(
    <>
      <div className={styles.wrapper}>
        <SalesStatisticTable filterSales={filterSales}/>
        <TopSales filterSales={filterSales}/>
      </div>
    </>
  )
}