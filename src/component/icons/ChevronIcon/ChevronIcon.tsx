import { IconProps } from "@/component/types/types";


export default function ChevronIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={59}
      height={59}
      viewBox="0 0 59 59"
      fill="none"
      className={className}
    >
      <path
        fill="#2D9CDB"
        d="m20.375 29.5 14.774 14.775 3.476-3.477L27.317 29.49l11.308-11.308-3.476-3.457L20.375 29.5Z"
      />
    </svg>
  )
}
