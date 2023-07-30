import { IconProps } from "@/component/types/types";


export default function MessageIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      className={className}
    >
      <g fill="#F2F2F2">
        <path d="M22.667 2.833A2.833 2.833 0 0 1 25.5 5.667H5.667V21.5a2.833 2.833 0 0 1-2.834-2.833v-13a2.833 2.833 0 0 1 2.834-2.834h17Z" />
        <path d="m19.833 31.167-3.777-4h-4.723A2.833 2.833 0 0 1 8.5 24.333v-13A2.833 2.833 0 0 1 11.333 8.5h17a2.833 2.833 0 0 1 2.834 2.833v13a2.833 2.833 0 0 1-2.834 2.834h-4.722l-3.778 4Zm2.557-6.834h5.943v-13h-17v13h5.944l2.556 2.707 2.557-2.707Z" />
      </g>
    </svg>
  )
}
