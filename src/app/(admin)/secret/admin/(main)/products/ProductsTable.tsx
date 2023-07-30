'use client'

import DataTable from "@/component/DataTable/DataTable";
import {AxiosGetWithToken} from "@/component/utils/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PartialProductProp{
  id: number,
  name: string,
  price: number,
  category_id: number,
  sku: string,
  stock: number
}

export default function ProductTable(){
  const [productList, setProducts] = useState<PartialProductProp[]>([])

  useEffect(() => {
    AxiosGetWithToken('/platform/product').then(res =>{
      if(res.status === 200){
        if(res.data.message === "Success get all product"){
          setProducts(res.data.response.map((product:PartialProductProp) => {
            let {id, category_id, name, price, sku, stock} = product
            return {id, name, category_id, price, sku, stock}
          }))
        }
      }
    })
  }, [])

  function renderTableItem(product: PartialProductProp, key:string){
    switch (key) {
      case 'price':
        return `$ ${product[key as keyof typeof product].toLocaleString(undefined, {minimumFractionDigits: 2})}`
      case 'name':
        return <Link className='link' href={"/secret/admin/products/"+product.id}>{product[key as keyof typeof product]}</Link>
      default:
        return product[key as keyof typeof product]
    }
  }

  return(
    <div>
      {
        productList.length > 0 ? 
        <DataTable labels={Object.keys(productList[0])}>
          <DataTable.Body>
            {productList.map(product => 
              <DataTable.Row key={product.id}>
                {Object.keys(product).map((key,index) =>
                  <DataTable.Item key={'child'+product.id+index}>
                      {
                        renderTableItem(product,key)
                      }
                  </DataTable.Item>
                )}
              </DataTable.Row>
            )}
          </DataTable.Body>
        </DataTable> :
        <h5>No product data found...</h5>
      }
    </div>
  )
}