/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "../stylesheets/dishesList.module.css";
import useAxios from "../Hooks/useAxios";

// eslint-disable-next-line no-unused-vars
export const AllDishesList = ({ category, setCategory, dishes, searchTerm }) => {
  const filterBySearch = (dish) => {
    if(searchTerm) {
      return dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return true;
  };

  const filterByCategory = (dish) => {
    if(category) {
      return category === dish.category;
    }

    return true;
  };

  return (
    <div className={styles.dishesList}>
      {dishes
        .filter(filterBySearch)
        .filter(filterByCategory)
        .map((dish) => (
          <div className={styles.dishContainer} key={dish.id}>
            <Link to={`/dishes/${dish.id}`}className={styles.dishContainer}>
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
    "http://localhost:8000/dishes",{params:{featured: true}}
  );
  return (
    <div className={styles.dishesList}>
      {dishes?.map((dish) => {
        console.log(dish)
         return (
           <div className={styles.dishContainer} key={dish.id}>
             <Link to={`/dishes/${dish.id}`}>
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

