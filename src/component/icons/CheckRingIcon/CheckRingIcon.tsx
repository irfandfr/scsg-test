import { IconProps } from "@/component/types/types";


export default function CheckRingIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <g stroke="#CCD2E3" strokeWidth={2}>
        <circle cx={12} cy={12} r={9} />
        <path d="m8 12 3 3 5-6" />
      </g>
    </svg>
  )
}
