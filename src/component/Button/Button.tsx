import Link from "next/link";
import styles from './button.module.scss';

interface ButtonProp {
  text?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string
  type?: "default" | "danger" | "secondary";
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
  style,
  type
}: ButtonProp) {
  if(link){
    return (
      <Link
        href={href ? href : '#'}
        className={`${styles.button} ${styles[type ? type : '']} ${className} `}
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
        className={`${styles.button} ${styles[type ? type : '']} ${className} `}
      >
        {text}
      </button>
    );
  }
}
