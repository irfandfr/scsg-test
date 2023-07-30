import { IconProps } from "@/component/types/types";


export default function CrossRingIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <g stroke="#CCD2E3" strokeWidth={2}>
        <circle cx={12} cy={12} r={9} />
        <path d="m9 15 6-6M15 15 9 9" />
      </g>
    </svg>
  )
}
