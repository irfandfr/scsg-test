'use client'

import Button from '@/component/Button/Button'
import CategoryTags from '@/component/CategoryTags/CategoryTags'
import ImageUpload from '@/component/ImageUpload/ImageUpload'
import Modal from '@/component/Modal/Modal'
import Spinner from '@/component/Spinner/Spinner'
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

const initErrorProduct={
  name: "",
  description : "",
  sku: "",
  stock: "",
  category_id: "",
  price: "",
  image: ""
}

export default function ProductForm({categories} : ProductFormProp){
  const [productState, setProduct] = useState({...initProduct})
  const [errorState, setError] = useState({...initErrorProduct})
  const [loadingModal, setModal] = useState(true)
  const [uploadState, setUploadState] = useState(undefined)

  function handleChangeProduct(
    e: React.ChangeEvent<HTMLInputElement> 
  ) {
    let value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    setProduct((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  }

  function checkValidity(key: keyof typeof productState){
    switch (key) {
      case ('price'):
        if(typeof productState[key] !== 'number'){
          return 'Value must be a number!'
        }else if(productState[key] < 0){
          return 'Value must be a positive number'
        }else{
          return ''
        }
      case('stock'):
        if(typeof productState[key] !== 'number'){
          return 'Value must be a number!'
        }else if(productState[key] < 0){
          return 'Value must be a positive number'
        }else if(productState[key] % 1 !== 0){
          return 'Value cannot have a fraction'
        }else{
          return ''
        }
      case('category_id'):
        if(typeof productState[key] === 'undefined'){
          return 'Choose a category!'
        }else{
          return ''
        }
      default:
        if(productState[key] === ''){
          return 'Value must not be empty!'
        }else{
          return ''
        }
    }
  }

  function checkValidInputs(){
    let valid = true
    let newErrorState = {...initErrorProduct}
    Object.keys(productState).forEach((productKey ) => {
      let errorText = checkValidity(productKey as keyof typeof productState)
      newErrorState[productKey as keyof typeof newErrorState] = errorText
      if(errorText !== ''){
        valid = false
      }
    })
    setError({...newErrorState})
    return valid
  }

  function onSubmit(){
    if(checkValidInputs()){
      setModal(true)
    }else{
      console.log('a')
    }
  }

  return(
    <>
      <form className={styles.productForm} onSubmit={e => e.preventDefault()}>
        <p className={styles.label}>Product Name</p>
        <TextForm name='name' value={productState.name} onChange={handleChangeProduct} error={errorState.name}/>
        <p className={styles.label}>Description</p>
        <TextForm name='description' value={productState.description} onChange={handleChangeProduct} error={errorState.description}/>
        <div className={styles.skuStockWrapper}>
          <div>
            <p className={styles.label}>SKU</p>
            <TextForm name='sku' value={productState.sku} onChange={handleChangeProduct} error={errorState.description}/>
          </div>
          <div>
            <p className={styles.label}>Stock</p>
            <TextForm type='number' name='stock' value={productState.stock} onChange={handleChangeProduct} error={errorState.stock}/>
          </div>
        </div>
        <p className={styles.label}>Category</p>
        <CategoryTags categories={categories} onClick={(id) => setProduct(p => {return {...p, category_id: id}})} error={errorState.category_id}/>
        <p className={styles.label}>Price</p>
        <div className={styles.pricePublishWrapper}>
          <TextForm type="number" name='price' value={productState.price} onChange={handleChangeProduct} error={errorState.price}/>
          <div className={styles.imageUploadContainer}>
            <ImageUpload value={productState.image} onChange={(link) => setProduct(p => {return{...p, image: link}})} error={errorState.image}/>
          </div>
          <Button text='Publish' onClick={onSubmit}/>
        </div>
      </form>
      <Modal show={loadingModal} noclose >
        <div className={styles.modal}>
          {
            typeof uploadState === 'undefined' ? 
            <>
              <Spinner />
              <span>Publishing new Product</span>
            </> : <div>a</div>
          }
        </div>
      </Modal>
    </>
  )
}