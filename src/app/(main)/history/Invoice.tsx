import ChevronIcon from "@/component/icons/ChevronIcon/ChevronIcon";
import InvoiceCard from "@/component/InvoiceCard/InvoiceCard";
import Link from "next/link";

import styles from './history.module.scss'

const sampleImage='https://s3-alpha-sig.figma.com/img/ca98/972f/33e4ac78ee008ad03579bbd69cc9ffe3?Expires=1691366400&Signature=XNKI1zIjSxr7uAuUOLVdPAGBfkkLVOO0xjsR~BDrtCG2oWfsgNX7~i8TEK~gmRtTXlmYCL01FCqXCVTUsHp2mwbPQsQI61gyfR9yiQWBI9UO3WGjzYaNePtkXpDtMiRuqgF6FYOdaxxDsdcnfod34tBQ2NL1kRALx6meFcLieZnt-GHyB6S1ddLi1vKErNf8wrybf6PyoB1kabnJEnzcOevm7U1g8hOwrxcU0WuxsPMRG9tVm7b~RZNUsjdnkYzlD8DvvDal6V23g~rkKgRa6jvv8nYR2tjOb3jZeDv7EZlKSchYtQM3WXW7EoBJO-~QJ2rk0PnXyDY~7fURWNlJIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const mockData ={
  user: {
    name: 'John Doe',
    address : '123 Pasir Ris, 13810, Singapore'
  },
  orderId: '21340',
  orders: [
    {image: sampleImage, totalPrice: 180, name: 'Bag of Laundry', quantity: 2},
    {image: sampleImage, totalPrice: 10, name: 'Dry Cleaning', quantity: 2},
    {image: sampleImage, totalPrice: 14, name: 'Rug', quantity: 2},
  ]
}

export default function Invoice(){
  return(
    <>
      <Link href={'/'}>
        <ChevronIcon className={styles.backIcon} />
      </Link>
      <InvoiceCard user={mockData.user} orderId={mockData.orderId} orders={mockData.orders}/>
    </>
  )
}