import styles from './newproduct.module.scss'
import ProductForm from './ProductForm'

export default function NewItemPage(){
  return(
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Add new Product</h2>
      <ProductForm />
    </div>
  )
}