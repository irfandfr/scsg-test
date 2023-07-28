"use client";
import React, { useEffect, useState } from "react";
import AdminCard from "@/component/AdminCard/AdminCard";
import BarChart from "@/component/BarChart/BarChart";

import AxiosGetWithToken from "@/component/utils/axios";
import { ReportProps } from "@/component/types/types";

import styles from './adminhome.module.scss'
import { poppins } from "@/component/fonts/fonts";
import SelectForm from "@/component/SelectForm/SelectForm";

interface SalesStatisticsProp{
  filterSales: {title: string, value: string}[]
}

export default function SalesStatisticTable({filterSales} : SalesStatisticsProp) {
  const [reports, setReports] = useState<ReportProps[]>([]);
  const [filter, setFilter] = useState('week')
  useEffect(() => {
    AxiosGetWithToken("/platform/product/report").then((res) => {
      if (res.status === 200) {
        if (typeof res.data !== "string") {
          setReports(res.data);
        }
      }
    });
  }, []);

  return (
    <AdminCard className={styles.statisticTable}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
        <h3 className={`${poppins.className} ${styles.title}`}>Product Sold</h3>
        <SelectForm options={filterSales} value={filter} onChange={(e) =>setFilter(e.target.value)}/>
      </div>
      <hr style={{marginTop: '17px'}}/>
      <div className={styles.tableContainer}>
        <BarChart title="Sales Report" datas={reports.map(report => {return {label: report.created_at, value: report.income, totalItem: report.total}})} />
      </div>
    </AdminCard>
  );
}
