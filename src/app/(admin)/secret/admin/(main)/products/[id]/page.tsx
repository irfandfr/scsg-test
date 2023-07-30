import AdminCard from "@/component/AdminCard/AdminCard";
import ProductDetails from "./ProductDetails";

import styles from './productpage.module.scss'

async function getProductData(id:string){
  let myHeader = new Headers({})
  myHeader.append('token', `${process.env.NEXT_PUBLIC_TOKEN}`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/platform/product/${id}`, {
    method: 'GET',
    headers: myHeader
  })
  if (!res.ok) {
    return res.text().then(text => { throw new Error(text) })
  }
  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }){
  const productData = await getProductData(params.id)
  if(!productData.status || productData.message !== 'Success get product detail'){
    throw new Error(productData.message)
  }
  return(
    <AdminCard className={styles.productCard}>
      <h2 className={styles.pageTitle}>Product Data</h2>
      <ProductDetails data={productData.response}/>
    </AdminCard>
  )
}