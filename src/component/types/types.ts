export interface IconProps{
  height?: number
  width?:number
  className?:string
}

export interface ReportProps{
  created_at: string
  total: number
  income: string
}

export interface ProductProp{
  name: string 
  description : string
  sku: string
  stock: number
  category_id: undefined | number
  price: number
  image: string
}