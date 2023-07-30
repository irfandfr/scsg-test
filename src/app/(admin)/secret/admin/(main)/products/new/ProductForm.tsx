import TextForm from '@/component/TextForm/TextForm'
import styles from './newproduct.module.scss'

export default function ProductForm(){
  return(
    <form className={styles.productForm}>
      <TextForm label='Product Name' />
      <div className={styles.imageUploadContainer}>

      </div>
    </form>
  )
}