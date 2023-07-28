"use client";
import { useEffect, useState } from "react";
import AdminCard from "@/component/AdminCard/AdminCard";
import BarChart from "@/component/BarChart/BarChart";

import AxiosGetWithToken from "@/component/utils/axios";
import { ReportProps } from "@/component/types/types";

import styles from './adminhome.module.scss'
import { poppins } from "@/component/fonts/fonts";

export default function SalesStatisticTable() {
  const [reports, setReports] = useState<ReportProps[]>([]);
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
      <h3 className={`${poppins.className} ${styles.title}`}>Product Sold</h3>
      <hr />
      <div className={styles.tableContainer}>
        <BarChart title="Sales Report" datas={reports.map(report => {return {label: report.created_at, value: report.income, totalItem: report.total}})} />
      </div>
    </AdminCard>
  );
}
