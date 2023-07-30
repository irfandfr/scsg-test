import styles from './newproduct.module.scss'
import ProductForm from './ProductForm'

async function getCategoryData() {
  let myHeader = new Headers({})
  myHeader.append('token', `${process.env.NEXT_PUBLIC_TOKEN}`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/platform/product/categories`, {
    method: 'GET',
    headers: myHeader
  })
  if (!res.ok) {
    return res.text().then(text => { throw new Error(text) })
  }
  return res.json()
}

export default async function NewItemPage(){
  const categories = await getCategoryData()
  return(
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Add New Product</h2>
      <ProductForm categories={categories.response}/>
    </div>
  )
}