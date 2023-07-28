import { IconProps } from "@/component/types/types";


export default function UserIcon({width, height, className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      fill="none"
      className={className}
    >
      <path
        fill="#2E3A59"
        d="M11.375 13a8.125 8.125 0 1 1 16.25 0 8.125 8.125 0 0 1-16.25 0Zm8.125 4.875a4.875 4.875 0 1 0 0-9.75 4.875 4.875 0 0 0 0 9.75ZM10.308 26.558A13 13 0 0 0 6.5 35.75h3.25a9.75 9.75 0 1 1 19.5 0h3.25a13 13 0 0 0-22.192-9.192Z"
      />
    </svg>
  )
}
