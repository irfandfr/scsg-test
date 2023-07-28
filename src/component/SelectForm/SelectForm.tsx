import { roboto } from '../fonts/fonts';
import styles from './selectform.module.scss'

interface SelectFormProp {
  value?: number | string;
  label?: string;
  onChange?: (event: React.FormEvent<HTMLSelectElement> | undefined) => void;
  ref?: React.LegacyRef<HTMLSelectElement>;
  placeholder?: string;
  className?: string;
  options?: {value: string|number, title: string}[]
}

export default function SelectForm({
  value,
  label,
  onChange,
  ref,
  className,
  placeholder,
  options
}: SelectFormProp) {
  return (
    <div className={`${className} ${roboto.className} ${styles.selectFormContainer}`}>
      <select
        className={styles.selectForm}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        ref={ref}
      >
        <option value={''}>-</option>
        {options?.map(({value, title},index) => 
          <option value={value} key={title+index}>{title}</option>
        )}
      </select>
      {!!label && label !== "" && <label className="text-[10px] rounded-full absolute text-slate-400 bg-slate-50 block px-2 top-[-7px] left-[6px] md:left-[10px]">{label}</label>}
    </div>
  );
}