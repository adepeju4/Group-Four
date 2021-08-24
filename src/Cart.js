import React from 'react'
import styles from "./stylesheets/cart.module.css";
import CartOrder from './CartOrder';
import OrderPayment from './OrderPayment';

const Cart = () => {
  return (
    <>
      <div className={styles.cartBody}>
        <div className={styles.allCartContainer}>
         

          <CartOrder />
          
          <OrderPayment />
         
        </div>

        

      </div>
    </>
  );
};

export default Cart;
