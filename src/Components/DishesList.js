/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "../stylesheets/dishesList.module.css";
import useAxios from "../Hooks/useAxios";

// eslint-disable-next-line no-unused-vars
export const AllDishesList = ({ dishes, searchTerm }) => {
  return (
    <div className={styles.dishesList}>
      {dishes
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((dish) => (
          <div className={styles.dishContainer} key={dish.id}>
            <Link to="#" className={styles.dishContainer}>
              <div className={styles.dishesImage}>
                <img src={dish.image} />
              </div>
              <div className={styles.dishDetails}>
                <p className={styles.dishTitle}>{dish.name}</p>
                <p className={styles.price}>N{dish.price}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export const MostOrderedMeals = () => {
  const { data: dishes } = useAxios(
    "http://localhost:8000/dishes",{params:{category: "most ordered meals"}}
  );
  return (
    <div className={styles.dishesList}>
      {dishes?.map((dish) => {
        console.log(dish)
         return (
           <div className={styles.dishContainer} key={dish.id}>
             <Link>
               <div className={styles.dishesImage}>
                 <img src={dish.image} />
               </div>
               <div className={styles.dishDetails}>
                 <p className={styles.dishTitle}>{dish.name}</p>
                 <p className={styles.price}>N{dish.price}</p>
               </div>
             </Link>
           </div>
         );
})}
    </div>
  );
};
