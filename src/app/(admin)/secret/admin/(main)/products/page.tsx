import Button from "@/component/Button/Button";
import ProductTable from "./ProductsTable";

export default function ProductsPage(){
   return(
    <>
      <Button link href="products/new" text="+ Add New Product" style={{marginBottom: '12px'}}/>
      <ProductTable />
    </>
   )
}