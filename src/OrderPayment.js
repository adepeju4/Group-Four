import React from 'react';
import styles from "./stylesheets/cart.module.css";

const OrderPayment = () => {
    return (
      <div className={styles.paymentContainer}>
        <div className={styles.container}>
          <p>Your order on foodine </p>
          <div className={styles.orderInfo}>
            <h2 className={styles.totalText}> TOTAL</h2>
            <h2 className={styles.totalAmount}>{"\u20A6"}6,400</h2>
          </div>
          <div>
            <button className={styles.payBtn}>PAY N6,400</button>
          </div>
        </div>
      </div>
    );
}

export default OrderPayment;
