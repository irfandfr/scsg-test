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

export interface ProductDataProp{
  id: string,
  name: string 
  description : string
  sku: string
  stock: number
  category_id: number
  price: number
  image: string
  user_id: number
  created_at: string
  updated_at: string
}