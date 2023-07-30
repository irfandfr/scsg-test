import axios from "axios";

export async function AxiosGetWithToken(url:string,query?: string[]){
  return axios({
    method: 'get',
    url: process.env.NEXT_PUBLIC_DB_URL+url,
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN
    }
  })
}

export async function AxiosPostWithToken(url:string,payload: {[keys:string] : any}){
  return axios({
    method: 'post',
    url: process.env.NEXT_PUBLIC_DB_URL+url,
    data: payload,
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN
    }
  })
}

export async function AxiosDeleteWithToken(url:string){
  return axios({
    method: 'delete',
    url: process.env.NEXT_PUBLIC_DB_URL+url,
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN
    }
  })
}