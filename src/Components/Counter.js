import styles from "../stylesheets/counter.module.css";
// import { getProducts, getProduct } from "../redux/action/productsAction";
import { useState} from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0)

    const handleIncrement = () => {
         setCount({
            count: this.state.count + 1
        });
    };

    const handleDecrement = () => {
        if(this.state.count< 1){
            setCount({
              count:0
            });
          }else {
            setCount({
              count: this.state.count- 1
            });
          }
    };
    return(
        <div className = { styles.counter}>
                <button className= { styles.btn} onClick = { handleDecrement}>-</button>
                    <span className = { styles.count}> {count} </span>
             <button className= { styles.btn} onClick = {handleIncrement}>+</button>
        </div> 
    )
}

export default Counter;