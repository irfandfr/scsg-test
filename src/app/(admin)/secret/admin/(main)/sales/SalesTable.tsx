"use client";

import Button from "@/component/Button/Button";
import DataTable from "@/component/DataTable/DataTable";
import { AxiosGetWithToken } from "@/component/utils/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./salespage.module.scss";

interface SalesProp {
  created_at: string;
  totall: number;
  income: string;
}

export default function SalesTable() {
  const [sales, setSalesList] = useState<SalesProp[]|undefined>(undefined);
  const [error, setError] = useState("");

  async function fetchReport(){
    setError('')
    AxiosGetWithToken("/platform/product/report")
    .then((res) => {
      if (res.status === 200) {
        setSalesList([...res.data].reverse());
      } else {
        setError("Sorry, theres something wrong! Error Status:" + res.status);
      }
    })
    .catch((res) => {
      setError(res.statusText);
    });
  }

  useEffect(() => {
    fetchReport()
  }, []);
  
  function renderTableItem(sale: SalesProp, key: string) {
    switch (key) {
      case "income":
        return `$ ${parseInt(
          sale[key as keyof typeof sale] + ""
        ).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
      default:
        return sale[key as keyof typeof sale];
    }
  }

  function renderTableContent(){
    if(typeof sales === 'undefined'){
      if(error === ''){
        return(
          <DataTable.Row>
            <DataTable.Item colspan={3}>
              Fetching data...
            </DataTable.Item>
          </DataTable.Row>
        )
      }else{
        return(
          <DataTable.Row>
            <DataTable.Item colspan={3}>
              <div className={styles.errorContainer}>
                <span>{error}</span>
                <Button text="Try Again" onClick={() => fetchReport()} />
              </div>
            </DataTable.Item>
          </DataTable.Row>
        )
      }
    }else if(sales.length <=0 ){
      return(
        <DataTable.Row>
          <DataTable.Item colspan={3}>
            No Sales data available...
          </DataTable.Item>
        </DataTable.Row>
      )
    }else if(sales.length > 0){
      return sales.map((sale) => (
        <DataTable.Row key={sale.created_at}>
          {Object.keys(sale).map((key, index) => (
            <DataTable.Item key={"child" + sale.created_at + index}>
              {renderTableItem(sale, key)}
            </DataTable.Item>
          ))}
        </DataTable.Row>
      ))
    }else{
      return <></>
    }
  }

  return (
    <div className={styles.tableContainer}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Item>Date</DataTable.Item>
          <DataTable.Item>Total Item Sold</DataTable.Item>
          <DataTable.Item>Income</DataTable.Item>
        </DataTable.Header>
        <DataTable.Body>
         {renderTableContent()}
        </DataTable.Body>
      </DataTable>
    </div>
  );
}
