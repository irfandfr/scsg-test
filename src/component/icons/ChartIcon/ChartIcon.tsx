import { IconProps } from "@/component/types/types";


export default function ChartIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
    >
      <path
        fill="#F2F2F2"
        d="M40.113 40.799H7.64a1.91 1.91 0 0 1-1.91-1.91V6.417h3.82v30.562h30.563v3.82Zm-24.12-9.55-2.622-2.568 9.275-9.085c.73-.71 1.893-.71 2.623 0l4.254 4.166 7.967-7.795 2.623 2.568-9.276 9.084c-.73.71-1.892.71-2.622 0l-4.256-4.168-7.964 7.797h-.002Z"
      />
    </svg>
  )
}
