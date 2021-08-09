import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./stylesheets/cart.module.css";
import {removeFromCart} from "./redux/action/cartAction"

const Cart = (dish) => {
   const { name, image, price } = dish;
    const [ count, setCount ] = useState(0);
    // const total = price.reduce((sum, price) => sum + count * price, 0)

    const handleIncrement = () => {
     setCount(Math.max(count + 1, 0));
   };

   const handleDecrement = () => {
     setCount(Math.max(count - 1, 0));
   };
  return (
    <>
      <div className={styles.hero}>
        <div className = { styles.cartscreen}>
            <div className = {styles.cartscreen_left}>    
                <div className = {styles.cartdish}>
                  <div className = {styles.dishimage}>
                  <img src = {image}/>
                  </div>

                  <div className = {styles.id}>
                  <Link to={`/dish/${1}`}className={styles.dishid}><p>{name}</p></Link>
                      <h3 className = {styles.size}>Extra Large</h3>
                  </div>

                  <div className = { styles.counter}>
                      <button className= { styles.btns} onClick = { handleDecrement}>-</button>
                        <span className = { styles.count}> {count} </span>
                      <button className= { styles.btns} onClick = {handleIncrement}>+</button>
                  </div> 

                <div className = {styles.qty}>
                    <h2 className = { styles.price}>{price} </h2>
                    <h2 className ={ styles.remove} onClick = {removeFromCart(dish) }>Remove item</h2>
                  </div>
                </div>
            </div>

            <div className = {styles.cartscreen_right}>
                  <div>
                    <p>Your order on foodine </p>
                    <h2 className = { styles.total}> TOTAL</h2>
                    <h2 className = { styles.cal}>N6,400</h2>
                  </div>
                <div>
                  <button className = { styles.btn}>PAY N6,400</button>
                </div>
              </div>
            </div>
        </div>
    </>
  );
};

export default Cart;