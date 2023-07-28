import { IconProps } from "@/component/types/types";


export default function HomeIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
    >
      <path
        fill="#3B97CB"
        d="M33.25 38.5H8.75A1.75 1.75 0 0 1 7 36.75V19.974c0-.464.185-.909.513-1.237l12.25-12.25a1.75 1.75 0 0 1 2.476 0l12.25 12.25c.329.328.513.773.511 1.238V36.75a1.75 1.75 0 0 1-1.75 1.75ZM17.5 26.25h7V35h7V20.699L21 10.199l-10.5 10.5V35h7v-8.75Z"
      />
    </svg>
  )
}
