"use client";

import ProductCard from "@/component/ProductCard/ProductCard";
import { ProductDataProp } from "@/component/types/types";
import { useState } from "react";
import styles from "./homepage.module.scss";

export default function LatestProducts() {
  const [products, setProducts] = useState<ProductDataProp[]>([]);
  const [categories, setCategory] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
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
      ) : (
        <>
          {products.map(({ id, image, category_id, price, name, created_at }) => {
            let category = categories.find(c => c.id === category_id)?.id
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
          })}
        </>
      )}
    </div>
  );
}
