/* eslint-disable no-unused-vars */
import styles from "./stylesheets/landing.module.css";
import {
  LightVariantCart,
  Circle,
  RightPlate,
  LeftPlate,
} from "./Components/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./Components/Footer";

import { AllDishesList, MostOrderedMeals } from "./Components/DishesList";
import useAxios from "./Hooks/useAxios";
import DropDownFilter from "./Components/Dropdown";



const Landing = () => {
  const [status, setStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("");


  const { data, isPending, error } = useAxios("http://localhost:8000/dishes");

  return (
    <div className={styles.landing}>
      <div className={styles.heroSection}>
        <Circle className={styles.circle} />
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <Link to="/">foodine</Link>
          </div>
          <div className={styles.mobileContainer}>
            <div id={status ? styles.mobileNav : ""}>
              <ul className={styles.landingNav}>
                <li>
                  <p>foodine</p>
                </li>
                <li className={styles.navLinks}>
                  <Link to="/cart">
                    <LightVariantCart landing={true} />
                    <p className={styles.cartText}>Cart</p>
                  </Link>
                </li>
                <li className={styles.navLinks}>
                  <Link to="/about">About</Link>
                </li>
                <li className={styles.navLinks}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className={[styles.signUp]}>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className={[styles.logIn]}>
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={status ? styles.menuMask : ""}
            onClick={() => setStatus(false)}
          ></div>
          <button
            className={styles.menuToggle}
            onClick={() => setStatus(status === false ? true : false)}
          >
            <i className={status ? styles.open : styles.close}></i>
            <i className={status ? styles.open : styles.close}></i>
            <i className={status ? styles.open : styles.close}></i>
          </button>
        </div>
        <div className={styles.heroContent}>
          <div>
            <h1>{"Hungry? You're "}</h1>
            <h1>{"in the right place"}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className={styles.address}>
              <p>
                <img src="/assets/pin.png" />
                Drop-off point
              </p>

              <input
                type="text"
                name="address"
                className={styles.input}
                id="address"
                placeholder="Write in your address"
              />
            </div>
          </div>
          <div>
            <img
              src="/assets/food.png"
              style={{ width: "500px" }}
              className={styles.foodImg}
            />
          </div>
        </div>
        <LeftPlate className={styles.left} />
        <RightPlate className={styles.right} />

        <div className={styles.next}>
          <Link to="#main">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2318 15.8377L17.4989 29.2905L3.76605 15.8355C2.90513 14.9864 1.50678 14.9864 0.645868 15.8355C-0.215047 16.6846 -0.215047 18.0592 0.645868 18.9061L15.9389 33.8877C16.767 34.7019 18.2289 34.7063 19.0613 33.8877L34.3543 18.904C35.2152 18.057 35.2152 16.6803 34.3543 15.8334C33.491 14.9888 32.0927 14.9888 31.2318 15.8377Z"
                fill="#9A9A9A"
              />
              <path
                d="M15.9387 18.689C16.7668 19.5032 18.2287 19.5076 19.0611 18.689L34.3541 3.70743C35.215 2.85833 35.215 1.48377 34.3541 0.636829C33.4932 -0.212276 32.0949 -0.212276 31.234 0.636829L17.4989 14.0897L3.76587 0.636829C2.90495 -0.212276 1.5066 -0.212276 0.645686 0.636829C-0.215229 1.48593 -0.215229 2.8605 0.645686 3.70743L15.9387 18.689Z"
                fill="#9A9A9A"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div id="main" className={styles.main}>
        <div className={styles.mostOrderedDish}>
          <div className={styles.modHeader}>
            <h2>Most Ordered Meals</h2>
          </div>
          {data && <MostOrderedMeals />}
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
             
              <DropDownFilter category={category} setCategory={setCategory} dishes={data}/>
            </div>
          </div>
          {data && <AllDishesList category={category} setCategory={setCategory} dishes={data} searchTerm={searchTerm} />}
          {isPending && <h3>Loading</h3>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
