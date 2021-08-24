/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./stylesheets/cart.module.css";
import { Spinner } from "react-bootstrap";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsAsync, deleteCartItemAsync } from './redux/action/cartAction';

const CartOrder = () => {
    const { _id } = useSelector((state) => state.userLogin);
    const dispatch = useDispatch();
    const { data, pending } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCartItemsAsync(_id));
    }, []);
   
    console.log(data, "cart order data");
    // const { name, image, price } = dish;
    const [count, setCount] = useState(0);
    // const total = price.reduce((sum, price) => sum + count * price, 0)

    const handleIncrement = () => {
        setCount(Math.max(count + 1, 0));
    };

    const handleDecrement = () => {
        setCount(Math.max(count - 1, 0));
    };
    
  const handleDelete = (dishId) => {
    useEffect(() => {
      dispatch(deleteCartItemAsync(dishId));
    }, [dishId]);
  }

    return (
      <div className={styles.cartContainer}>
        {pending && (
          <>
            <div className={styles.pending}>
              <Spinner animation="grow" />
              Loading
            </div>
          </>
        )}
        {data && (
          <>
            {data.map((item) => (
              <div className={styles.eachCartItem} key={item.dish._id}>
                <div className={styles.dishContainer}>
                  <img src={item.dish.image} className={styles.dish} />
                </div>

                <div className={styles.idContainer}>
                  <Link
                    to={`/dishes/${item.dish._id}`}
                    className={styles.idName}
                  >
                    {" "}
                    <p> {item.dish.name}</p>{" "}
                  </Link>
                  <h3 className={styles.orderSize}>{item.dish.size}</h3>
                </div>

                <div className={styles.counterContainer}>
                  <button className={styles.btns} onClick={handleDecrement}>
                    {" "}
                    -{" "}
                  </button>
                  <div className={styles.countContainer}>
                    <span className={styles.count}> {count} </span>
                  </div>
                  <button className={styles.btns} onClick={handleIncrement}>
                    {" "}
                    +{" "}
                  </button>
                </div>

                <div className={styles.qty}>
                  <h2 className={styles.price}> {item.dish.price}</h2>
                  <button onClick={() => deleteCartItemAsync(item.dish._id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
};

export default CartOrder;
