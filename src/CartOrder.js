import React from 'react'
import { useState } from 'react';
import styles from "./stylesheets/cart.module.css";
import { removeFromCart } from "./redux/action/cartAction";
import { Link } from 'react-router-dom';

const CartOrder = (dish) => {
    // const { name, image, price } = dish;
    const [count, setCount] = useState(0);
    // const total = price.reduce((sum, price) => sum + count * price, 0)

    const handleIncrement = () => {
        setCount(Math.max(count + 1, 0));
    };

    const handleDecrement = () => {
        setCount(Math.max(count - 1, 0));
    };

    return (
            <div className={styles.eachCartItem}>
                <div className={styles.dishContainer}>
                    <img src="assets/food.png" className={styles.dish} />
                </div>

                <div className={styles.idContainer}>
                <Link to={`/dish/${1}`} className={styles.idName} > <p> Domino <span>&#39;</span>s Pizza</p> </Link>
                    <h3 className={styles.orderSize}>Extra Large</h3>
                </div>

                <div className={styles.counterContainer}>
                    <button className={styles.btns} onClick={handleDecrement}> - </button>
                    <div className={styles.countContainer}>
                        <span className={styles.count}> {count} </span>
                    </div>
                    <button className={styles.btns} onClick={handleIncrement}> + </button>
                </div>

                <div className={styles.qty}>
                    <h2 className={styles.price}> N1600 </h2>
                    <h2 className={styles.removeOrder} onClick={removeFromCart(dish)}>Remove item</h2>
                </div>
        </div>
    )
};

export default CartOrder;
