import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import DropDownFilter from "./Dropdown";
import { AllDishesList, MostOrderedMeals } from "./DishesList";
import { getProductsAsync } from "../redux/action/productsAction";

import styles from "../stylesheets/landing.module.css";
import { Spinner } from "react-bootstrap";

const DishesHandler = () => {
  const dispatch = useDispatch();
  const { data, pending } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mostOrderedDish}>
          <div className={styles.modHeader}>
            <h2>Most Ordered Meals</h2>
          </div>
          {data && <MostOrderedMeals />}
          {pending && (
            <>
              <div className={styles.pending}>
                <Spinner animation="grow" />
                Loading
              </div>
            </>
          )}
        </div>
        <div className={styles.allDishes}>
          <div className={styles.allDishesHeader}>
            <h3>Our Dishes</h3>
            <div className={styles.filterContainer}>
              <input
                type="text"
                name="dishes"
                id={styles.dishes}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />

              <DropDownFilter
                category={category}
                setCategory={setCategory}
                dishes={data}
              />
            </div>
          </div>
          {data && (
            <AllDishesList
              category={category}
              setCategory={setCategory}
              dishes={data}
              searchTerm={searchTerm}
            />
          )}
          {pending && (
            <>
              <div className={styles.pending}>
                <Spinner animation="grow" />
                Loading
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DishesHandler;
