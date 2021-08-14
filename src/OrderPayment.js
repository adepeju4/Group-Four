import React from 'react';
import styles from "./stylesheets/cart.module.css";

const OrderPayment = () => {
    return (
        <div className={styles.paymentContainer}>
            <div>
                <p>Your order on foodine </p>
                <h2 className={styles.totalText}> TOTAL</h2>
                <h2 className={styles.totalAmount}>N6,400</h2>
            </div>
            <div>
                <button className={styles.payBtn}>PAY N6,400</button>
            </div>
        </div>
    )
}

export default OrderPayment;
