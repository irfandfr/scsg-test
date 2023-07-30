import styles from './textform.module.scss'

interface TextFormProp {
  name?: string
  id?:string
  value?: number | string;
  defaultValue?: number | string
  type?: 'text' | 'number'
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>
    ) => void;
  placeholder?: string;
  className?: string;
  error?: string
}

export default function TextForm({
  value,
  name,
  id,
  defaultValue,
  label,
  onChange,
  type,
  className,
  placeholder,
  error
}: TextFormProp) {
  return (
    <div className={`${className} ${styles.formContainer}`}>
      {!!label && label !== "" && <label className={styles.label}>{label}</label>}
      <input
        type={!type ? 'text' : type}
        className={`${styles.textForm}`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        min={0}
        name={name}
        id={id}
      />
      <label className={styles.errorText}>{error}</label>
    </div>
  );
}
