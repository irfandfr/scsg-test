'use client'

import AdminCard from "@/component/AdminCard/AdminCard";
import { poppins } from "@/component/fonts/fonts";
import SelectForm from "@/component/SelectForm/SelectForm";
import { useState } from "react";

import styles from './adminhome.module.scss'

interface TopSalesProp{
  filterSales: {title: string, value: string}[]
}

const mockSales = {
  week: [
    {item: 'Jeans', total: 200},
    {item: 'T-Shirt', total: 160},
    {item: 'Pants', total: 120},
  ],
  month:[
    {item: 'T-Shirt', total: 1020},
    {item: 'Jeans', total: 850},
    {item: 'Socks', total: 600},
  ]
}


export default function TopSales({filterSales}:TopSalesProp){
  const [filter, setFilter] = useState('week')
  return(
    <AdminCard className={styles.topSalesCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>Top selling Product</h3>
        <SelectForm options={filterSales} value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </div>
      <div className={`${styles.saleTable} ${poppins.className}`}>
        <div className={styles.entry}>
          <span>Name</span>
          <span>Value</span>
        </div>
        <div className={`${styles.entry} ${styles.line}`}>
          <hr />
        </div>
        {
          mockSales[filter as keyof typeof mockSales].map((item, index) => 
          <div key={item.item+index} className={styles.entry}>
            <span>{item.item}</span>
            <span>$. {(item.total.toLocaleString('de-DE',{minimumFractionDigits: 2}))}</span>
          </div>
        )}
      </div>
    </AdminCard>
  )
}