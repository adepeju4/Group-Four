import React from 'react'
import styles from "./stylesheets/cart.module.css";
import CartOrder from './CartOrder';
import OrderPayment from './OrderPayment';

const Cart = () => {
  return (
    <>
      <div className={styles.cartBody}>
        <div className={styles.allCartContainer}>
          <CartOrder className={styles.eachCartItem} />       
          <CartOrder className={styles.eachCartItem} />       
          <CartOrder className={styles.eachCartItem} />              
        </div>

        <div>
          <OrderPayment />
        </div>

      </div>
    </>
  );
};

export default Cart;
