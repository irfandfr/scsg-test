"use client";
import AdminCard from "@/component/AdminCard/AdminCard";
import BarChart from "@/component/BarChart/BarChart";
import { ReportProps } from "@/component/types/types";
import AxiosGetWithToken from "@/component/utils/axios";
import { useEffect, useState } from "react";

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
    <AdminCard>
      { (
        <BarChart title="Sales Report" datas={reports.map(report => {return {label: report.created_at, value: report.income, totalItem: report.total}})} />
      )}
    </AdminCard>
  );
}
