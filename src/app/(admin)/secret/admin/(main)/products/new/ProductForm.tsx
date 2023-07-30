'use client'

import Button from '@/component/Button/Button'
import CategoryTags from '@/component/CategoryTags/CategoryTags'
import ImageUpload from '@/component/ImageUpload/ImageUpload'
import TextForm from '@/component/TextForm/TextForm'
import { ProductProp } from '@/component/types/types'
import { useState } from 'react'
import styles from './newproduct.module.scss'

interface ProductFormProp{
  categories : {id: number, name: string}[]
}

const initProduct : ProductProp={
  name: "",
  description : "",
  sku: "",
  stock: 0,
  category_id: undefined,
  price: 0,
  image: ""
}

export default function ProductForm({categories} : ProductFormProp){
  const [productState, setProduct] = useState({...initProduct})

  function handleChangeProduct(
    e: React.ChangeEvent<HTMLInputElement> 
  ) {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return(
    <form className={styles.productForm} onSubmit={e => e.preventDefault()}>
      <p className={styles.label}>Product Name</p>
      <TextForm name='name' value={productState.name} onChange={handleChangeProduct}/>
      <p className={styles.label}>Description</p>
      <TextForm name='description' value={productState.description} onChange={handleChangeProduct}/>
      <div className={styles.skuStockWrapper}>
        <div>
          <p className={styles.label}>SKU</p>
          <TextForm name='sku' value={productState.sku} onChange={handleChangeProduct}/>
        </div>
        <div>
          <p className={styles.label}>Stock</p>
          <TextForm type='number' name='stock' value={productState.stock} onChange={handleChangeProduct}/>
        </div>
      </div>
      <p className={styles.label}>Category</p>
      <CategoryTags categories={categories} onClick={(id) => setProduct(p => {return {...p, category_id: id}})}/>
      <p className={styles.label}>Price</p>
      <div className={styles.pricePublishWrapper}>
        <TextForm type="number" name='price' value={productState.price} onChange={handleChangeProduct}/>
        <div className={styles.imageUploadContainer}>
          <ImageUpload value={productState.image} onChange={(link) => setProduct(p => {return{...p, image: link}})}/>
        </div>
        <Button text='Publish' />
      </div>
    </form>
  )
}