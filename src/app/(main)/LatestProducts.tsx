"use client";

import MainButton from "@/component/MainButton/MainButton";
import ProductCard from "@/component/ProductCard/ProductCard";
import { ProductDataProp } from "@/component/types/types";
import { AxiosGetWithToken } from "@/component/utils/axios";
import { useEffect, useState } from "react";
import styles from "./homepage.module.scss";

export default function LatestProducts() {
  const [products, setProducts] = useState<ProductDataProp[] | undefined>(undefined);
  const [categories, setCategories] = useState<{ id: number; name: string }[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    fetchProductThenCategory()
  }, [])

  async function fetchProductThenCategory(){
    AxiosGetWithToken('/platform/product').then(res =>{
      if(res.status === 200){
        if(res.data.message === "Success get all product"){
          setProducts([...res.data.response].reverse())
          fetchCategories()
        }else{
          setErrorText(res.data.message)
        }
      }
    }).catch((res) => {
      setErrorText(res.statusText)
    }).finally(() => {
      setLoading(false)
    })
  }

  async function fetchCategories(){
    if(typeof categories === 'undefined'){
      AxiosGetWithToken('/platform/product/categories').then(res =>{
        if(res.status === 200){
          if(res.data.message === "Success get categories"){
            setCategories([...res.data.response])
          }else{
            setErrorText(res.data.message)
          }
        }
      }).catch(res => {
        setErrorText(res.statusText)
      })
    }
  }

  async function retryFetch(){
    setLoading(true);
    fetchProductThenCategory()
  }
  
  function renderList(){
    if(products && products.length > 0){
      return products.map(({ id, image, category_id, price, name, created_at }) => {
        let category = categories ? categories.find(c => c.id === category_id)?.id : undefined
        category ??= category_id
        return (
          <ProductCard
            key={id}
            id={id}
            image={image}
            price={price}
            name={name}
            category={`${category}`}
            created_at={created_at}
          />
        );
      })
    }else if(products && products.length <= 0){
      return(
        <div className={`${styles.skeletonProduct} ${styles.fail}`}>
          <span>No products found...</span>
        </div>
      )
    }else{
      return(
        <div className={`${styles.skeletonProduct} ${styles.fail}`}>
          <span>Something's wrong: {errorText}</span>
          <MainButton onClick={() => retryFetch()} text={'Retry'} />
        </div>
      )
    }
  }

  return (
    <div className={styles.latestProduct}>
      {loading ? (
        Array(5)
          .fill(1)
          .map((_, index) => {
            return (
              <div className={styles.skeletonProduct} key={"skeleton" + index}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
              </div>
            );
          })
      ) : 
        renderList()
      }
    </div>
  );
}
