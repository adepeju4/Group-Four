import { useParams } from "react-router";
import styles from "../stylesheets/cartdish.module.css";
import { Link } from "react-router-dom";
import Counter from './Counter';
import useAxios from "../Hooks/useAxios";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartDish = () => {
    const { id } = useParams();
  const { data: dish } = useAxios(
`http://localhost:8000/dishes/${id}`
  );
  console.log(dish);
    return (
      <>
       <div className = { styles.cartdish}>
           <div className = { styles.dishimage}>
                <img src = "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwcGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt = "dish name"/>
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