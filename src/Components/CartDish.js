import styles from "../stylesheets/cartdish.module.css";
import { Link } from "react-router-dom";
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CartDish = () => {
  const url = 'http://localhost:8000/';
  const dish = () => {
    axios.get(`${url}dishes`)
  }
    return (
      <>
       <div className = { styles.cartdish}>
           <div className = { styles.dishimage}>
                <img src = {dish.name}/>
           </div>
           <div className = { styles.id}>
                <Link to={`/dish/${1}`}className={styles.dishid}><p>Apple pie</p></Link>
            <h3 className = { styles.size}>Extra Large</h3>
            </div>

            <Counter/>

            <div className = {styles.qty}>
            <h2 className = { styles.price}>N4,999</h2>
               <h2 className ={ styles.remove}>Remove item</h2>
            </div>
       </div>
      </>
    );
  };
  
  export default CartDish;