'use client'

import Button from '@/component/Button/Button'
import CategoryTags from '@/component/CategoryTags/CategoryTags'
import ImageUpload from '@/component/ImageUpload/ImageUpload'
import TextForm from '@/component/TextForm/TextForm'
import styles from './newproduct.module.scss'

interface ProductFormProp{
  categories : {id: string, name: string}[]
}

export default function ProductForm({categories} : ProductFormProp){
  return(
    <form className={styles.productForm} onSubmit={e => e.preventDefault()}>
      <p className={styles.label}>Product Name</p>
      <TextForm />
      <p className={styles.label}>Description</p>
      <TextForm />
      <div className={styles.skuStockWrapper}>
        <div>
          <p className={styles.label}>SKU</p>
          <TextForm />
        </div>
        <div>
          <p className={styles.label}>Stock</p>
          <TextForm type='number'/>
        </div>
      </div>
      <p className={styles.label}>Category</p>
      <CategoryTags categories={categories} />
      <p className={styles.label}>Price</p>
      <div className={styles.pricePublishWrapper}>
        <TextForm type="number"/>
        <Button text='Publish' />
      </div>
      <div className={styles.imageUploadContainer}>
        <ImageUpload />
      </div>
    </form>
  )
}