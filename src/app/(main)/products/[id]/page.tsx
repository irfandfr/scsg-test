import AdminCard from "@/component/AdminCard/AdminCard";
import ChevronIcon from "@/component/icons/ChevronIcon/ChevronIcon";
import MainContainer from "@/component/MainContainer/MainContainer";
import Link from "next/link";
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
    <MainContainer className={styles.productPage}>
      <Link href={'/'}>
        <ChevronIcon />
      </Link>
      <ProductDetails data={productData.response}/>
    </MainContainer>
  )
} 