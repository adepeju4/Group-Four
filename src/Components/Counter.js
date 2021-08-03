import styles from "../stylesheets/counter.module.css";
import { useState} from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1) 
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