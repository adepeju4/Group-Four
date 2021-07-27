/* eslint-disable react/prop-types */
import styles from "../stylesheets/dishesList.module.css";

export const AllDishesList = ({ dishes }) => {
  return (
    <div className={styles.dishesList}>
      {dishes.map((dish) => (
        <div className={styles.dishContainer} key={dish.id}>
          <div className={styles.dishesImage}>
            <img src={dish.image} />
          </div>
          <p className={styles.dishTitle}>{dish.name}</p>
          <p className={styles.price}>N{dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export const MostOrderedMeals = () => {
  return (
    <div className={styles.dishesList}>
      <div className={styles.dishContainer}>
        <div className={styles.dishesImage}>
          <img src="assets/food.png" />
        </div>
        <p className={styles.dishTitle}></p>
        <p className={styles.price}>N</p>
      </div>
    </div>
  );
};
