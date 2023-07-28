import { IconProps } from "@/component/types/types";


export default function FolderOpenIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46 46"
      fill="none"
      className={className}
    >
      <path
        fill="#fff"
        d="M34.382 38.203H5.73a1.878 1.878 0 0 1-1.896-1.91H3.82V9.55a3.82 3.82 0 0 1 3.82-3.82h11.461c.427 0 .841.143 1.177.406l4.363 3.414h9.741a3.82 3.82 0 0 1 3.82 3.82v7.64h1.91a1.91 1.91 0 0 1 1.756 2.663l-5.73 13.371a1.91 1.91 0 0 1-1.756 1.158Zm-21.66-13.371-4.094 9.55h24.496l4.093-9.55H12.722ZM7.64 13.37v13.62l2.064-4.822a1.91 1.91 0 0 1 1.756-1.158h22.921v-7.64H7.641Z"
      />
    </svg>
  )
}
