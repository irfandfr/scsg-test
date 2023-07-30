import styles from "./invoice.module.scss";

interface InvoicecardProp {
  orderId: string;
  user: {
    name: string;
    address: string;
  };
  orders: {
    image: string;
    name: string;
    quantity: number;
    totalPrice: number;
  }[];
}

export default function InvoiceCard({
  orderId,
  user,
  orders,
}: InvoicecardProp) {
  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.header}>
        <h3>order summary</h3>
      </div>
      <div className={styles.content}>
        <span className={styles.orderId}># {orderId}</span>
        <div className={styles.userDetails}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.address}>{user.address}</span>
        </div>
        {orders.map(({ image, name, quantity, totalPrice }, index) => {
          return (
            <div key={"orders" + index} className={styles.orders}>
              <img src={image} alt={name + ' image'} className={styles.image} />
              <div className={styles.orderDetails}>
                <h5>{name}</h5>
                <span>Qty: {quantity}</span>
              </div>
              <div className={styles.priceDetails}>
                <span>Total</span>
                <h5>
                  ${" "}
                  {totalPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <h5>Total Order</h5>
        <span className={styles.totalPrice}>
          ${" "}
          {orders
            .reduce((acc, curr) => acc + curr.totalPrice, 0)
            .toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}
