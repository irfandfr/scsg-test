'use client'

import Button from '@/component/Button/Button'
import CheckRingIcon from '@/component/icons/CheckRingIcon/CheckRingIcon'
import CrossRingIcon from '@/component/icons/CrossRingIcon/CrossRingIcon'
import Modal from '@/component/Modal/Modal'
import Spinner from '@/component/Spinner/Spinner'
import { ProductDataProp } from '@/component/types/types'
import { AxiosDeleteWithToken } from '@/component/utils/axios'
import { useState } from 'react'
import styles from './productpage.module.scss'

interface ProductDetailsProp{
  data : ProductDataProp
}


export default function ProductDetails({data} : ProductDetailsProp){
  const [modalOpen, setModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({success: false, text: ''})

  function renderTableItem(product: ProductDataProp, key:string){
    switch (key) {
      case 'price':
        return `$ ${product[key as keyof typeof product].toLocaleString(undefined, {minimumFractionDigits: 2})}`
      case 'image':
        return <div className={styles.image} style={{backgroundImage: `url(${product[key]})`}}></div>
      default:
        let val = product[key as keyof typeof product]
        return val === '' || typeof val === 'undefined' || !val ? '-' : val 
    }
  }

  async function deleteProduct(){
    setLoading(true)
    AxiosDeleteWithToken('/platform/product/'+data.id).then(res => {
      if(res.status === 200){
        setResponse({success: true, text: res.data.message})
      }
    }).catch((res) => {
      setResponse({success: false, text: res.statusText})
    }).finally(() => {
      setLoading(false)
    })
  }

  return(
    <div className={styles.detailsContainer}>
      <Modal show={modalOpen} className={styles.pageModal} noclose>
        {loading ? <div className={styles.content}><Spinner /><span>Loading...</span></div> :
          response.text === "" ? 
          <div className={styles.content}>
            <span className={styles.confirmationText}>Delete <b>{data.name}</b> with ID <b>{data.id}</b></span>
            <div className={styles.deleteControl}>
              <Button text='Back' type='secondary' onClick={() => setModal(false)}/>
              <Button text='Delete' type='danger' onClick={deleteProduct}/>
            </div>
          </div>:
          response.success ?
          <div className={`${styles.content} ${styles.success}`}>
            <CheckRingIcon className={styles.icon}/>
            <span>{response.text}</span>
            <div className={styles.modalNavs}>
              <Button link href={'/secret/admin/products'} type='secondary' text='Back' />
            </div>
          </div>:
          <div className={`${styles.content} ${styles.error}`}>
            <CrossRingIcon className={styles.icon}/>
            <span>{response.text}</span>
            <div className={styles.modalNavs}>
              <Button link href={'/secret/admin/products'} type='secondary' text='Back' />
            </div>
          </div>
        }
      </Modal>
      <table className={styles.table}>
        <tbody>
          {
            Object.keys(data).map(key => 
            <tr key={key} className={styles.row}>
              <td className={styles.title}>{key.split('_').join(' ')}</td>
              <td>:</td>
              <td>{renderTableItem(data, key)}</td>
            </tr>
            )
          }
        </tbody>
      </table>
      <Button text='Delete Product' onClick={() => setModal(true)} type='danger' />
    </div>
  )
}
