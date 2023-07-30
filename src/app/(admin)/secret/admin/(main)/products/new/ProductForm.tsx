'use client'

import Button from '@/component/Button/Button'
import CategoryTags from '@/component/CategoryTags/CategoryTags'
import CheckRingIcon from '@/component/icons/CheckRingIcon/CheckRingIcon'
import CrossRingIcon from '@/component/icons/CrossRingIcon/CrossRingIcon'
import ImageUpload from '@/component/ImageUpload/ImageUpload'
import Modal from '@/component/Modal/Modal'
import Spinner from '@/component/Spinner/Spinner'
import TextForm from '@/component/TextForm/TextForm'
import { ProductProp } from '@/component/types/types'
import { AxiosPostWithToken } from '@/component/utils/axios'
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
  const [loadingModal, setModal] = useState(false)
  const [uploadState, setUploadState] = useState<string|undefined>('')

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

  function postProduct(){
    AxiosPostWithToken('/platform/product',productState).then( res =>{
      console.log(res)
      if(res.status === 200){
        setUploadState(res.data.message)
      }else{
        setUploadState('Error ' + res.status)
      }
    }).catch(res => {
      if(res.statusText !== ''){
        setUploadState(res.statusText)
      }else{
        setUploadState('Error ' + res.status)
      }
    })
  } 

  function onSubmit(){
    if(checkValidInputs()){
      setModal(true)
      postProduct()
    }
  }

  function resetAll(){
    setProduct(initProduct);
    setError(initErrorProduct);
    setModal(false)
    setUploadState(undefined)
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
            </> : uploadState === "Success create new product" ? 
            <div className={`${styles.result} ${styles.success}`}>
              <CheckRingIcon className={styles.icon}/>
              <span>{uploadState}</span>
              <div className={styles.modalNavs}>
                <Button link href={'/secret/admin/products'} type='secondary' text='Back' />
                <Button text='Publish another asset' onClick={() => resetAll()}/>
              </div>
            </div>:
            <div className={`${styles.result} ${styles.error}`}>
              <CrossRingIcon className={styles.icon}/>
              <span>{uploadState}</span>
              <div className={styles.modalNavs}>
                <Button type='secondary' text='Back' onClick={() => setModal(false)}/>
                <Button text='Try Again' />
              </div>
            </div>
          }
        </div>
      </Modal>
    </>
  )
}