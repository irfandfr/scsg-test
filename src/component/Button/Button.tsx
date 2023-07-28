import Link from "next/link";
import styles from './button.module.scss';

interface ButtonProp {
  text?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string
  type?: "default" | "danger";
  link?: boolean
  style?: React.CSSProperties
}

export default function Button({
  text,
  className,
  onClick,
  href,
  link,
  disabled,
  style
}: ButtonProp) {
  if(link){
    return (
      <Link
        href={href ? href : '#'}
        className={`${styles.button}  ${className} `}
        style={style}
      >
        {text}
      </Link>
    );
  }else{
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={style}
        className={`${styles.button}  ${className} `}
      >
        {text}
      </button>
    );
  }
}
