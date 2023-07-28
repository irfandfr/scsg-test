import axios from "axios";

export default async function AxiosGetWithToken(url:string,query?: string[]){
  return axios({
    method: 'get',
    url: process.env.NEXT_PUBLIC_DB_URL+url,
    headers:{
      token: process.env.NEXT_PUBLIC_TOKEN
    }
  })
}