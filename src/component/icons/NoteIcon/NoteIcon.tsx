import { IconProps } from "@/component/types/types";


export default function NoteIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46 46"
      fill="none"
      className={className}
    >
      <path
        fill="#fff"
        d="M24.917 40.25H9.583a3.833 3.833 0 0 1-3.833-3.833V9.583A3.833 3.833 0 0 1 9.583 5.75h26.834a3.833 3.833 0 0 1 3.833 3.833v15.334a.245.245 0 0 1-.011.065.299.299 0 0 0-.012.053c-.01.17-.044.336-.098.497l-.017.052a.942.942 0 0 1-.048.126 1.892 1.892 0 0 1-.383.562L26.264 39.688c-.357.358-.842.56-1.347.562ZM9.583 9.583v26.834H23v-11.5c0-1.059.858-1.917 1.917-1.917h11.5V9.583H9.583Zm17.25 17.25v6.875l6.873-6.875h-6.873Z"
      />
    </svg>
  )
}
