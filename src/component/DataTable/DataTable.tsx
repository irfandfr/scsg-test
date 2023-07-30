import AdminCard from "../AdminCard/AdminCard";
import { poppins } from "../fonts/fonts";
import styles from './datatable.module.scss';

interface DataTableProp {
  children: React.ReactNode;
  labels?: string[]
  className?: string;
}

export default function DataTable({
  children,
  labels,
  className,
}: DataTableProp) {
  return (
    <AdminCard className={styles.dataTableContainer}>
      <div className={styles.wrapper}>
        <table
          className={`${className} ${styles.dataTable} ${poppins.className} `}
        >
          {!!labels && labels.length > 0 && 
            <Header>
              {labels.map((label,index) => <Item key={label+index}>{label}</Item>)}
            </Header>
          }
          {children}
        </table>
      </div>
    </AdminCard>
  );
}

interface HeadProp {
  children: React.ReactNode;
}
const Header = ({ children }: HeadProp) => (
  <thead
    className={`${styles.header}`}
  >
    <tr>{children}</tr>
  </thead>
);

interface Props {
  children: React.ReactNode;
  className?: string;
  colspan?: number;
}
const Item = ({ children, colspan, className }: Props) => (
  <td
    colSpan={colspan}
    className={`${styles.item} ${className} `}
  >
    {children}
  </td>
);

interface RowProps {
  children: React.ReactNode;
}

const Row = ({ children }: RowProps) => (
  <tr>{children}</tr>
);

interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps) => <tbody>{children}</tbody>;

DataTable.Header = Header;
DataTable.Body = Body;
DataTable.Item = Item;
DataTable.Row = Row;
