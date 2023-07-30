import { IconProps } from "@/component/types/types";


export default function ImageIcon({className}:IconProps){
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={171}
      viewBox="0 0 171 171"
      fill="none"
      className={className}
    >
      <path
        fill="#CAECFF"
        d="M135.375 149.625h-99.75c-7.87 0-14.25-6.38-14.25-14.25v-99.75c0-7.87 6.38-14.25 14.25-14.25h99.75c7.87 0 14.25 6.38 14.25 14.25v99.75c0 7.87-6.38 14.25-14.25 14.25Zm-99.75-114v99.75h99.75v-99.75h-99.75Zm92.625 85.5h-85.5l21.375-28.5 7.125 7.125 21.375-28.5 35.625 49.875Zm-67.688-42.75c-5.902 0-10.687-4.785-10.687-10.688C49.875 61.785 54.66 57 60.563 57c5.902 0 10.687 4.785 10.687 10.688 0 5.902-4.785 10.687-10.688 10.687Z"
      />
    </svg>
  )
}
