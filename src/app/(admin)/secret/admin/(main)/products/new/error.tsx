'use client' // Error components must be Client Components
 
import AdminCard from '@/component/AdminCard/AdminCard'
import Button from '@/component/Button/Button'
import Link from 'next/link'

import styles from './newproduct.module.scss'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
 
  function errorType(){
    if(error.message.includes('not found')){
      return(1)
    }else if(error.message.includes('failed')){
      return (2)
    }else{
      return (10)
    }
  }
  function renderErrorMsg(){
    switch (errorType()) {
      case 1:
        return(
          <>
            <h2>ID data not found!</h2>
            <Link href={'/secret/admin/products'}
            >
              <Button text="
              Back to Products List Page"/>
            </Link>
          </>
        )
      case 2:{
        return(
          <>
            <h2>Fetching data failed!</h2>
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              text='Try again'
            />
          </>
        )
      }
      default:
        return(
          <>
            <h2>Sorry! Something went wrong.</h2>
            <p>{error.message}</p>
            <Link href={'/secret/admin/products'}
            >
              <Button text="
              Back to Products List Page"/>
            </Link>
          </>
        )
    }
  }
  return(
    <AdminCard className={styles.errorPage}>
      {renderErrorMsg()}
    </AdminCard>
  )
}