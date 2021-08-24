import React from 'react';
import styles from "./stylesheets/cart.module.css";
import Modal from './Modal';

const OrderPayment = () => {
    return (
        <div className={styles.paymentContainer}>
            <div>
                <p>Your order on foodine </p>
                <h2 className={styles.totalText}> TOTAL</h2>
                <h2 className={styles.totalAmount}>N4,800</h2>
            </div>
            <div>
                <Modal></Modal>
            </div>
        </div>
    )
}

export default OrderPayment;
