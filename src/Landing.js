import DishesHandler from "./Components/DishesHandler";
import Hero from "./Components/Hero";
import styles from "./stylesheets/landing.module.css";
<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/action/productsAction";
import { addToCart } from './redux/action/cartAction'

import {
  LightVariantCart,
  Circle,
  RightPlate,
  LeftPlate,
} from "./Components/Icons";

import Footer from "./Components/Footer";

import { AllDishesList, MostOrderedMeals } from "./Components/DishesList";
import DropDownFilter from "./Components/Dropdown";
import { useEffect } from "react";
=======
>>>>>>> 898be4c637e9ae3396844b33a3aae93d686882a3

const Landing = () => {
  return (
    <div className={styles.landing}>
<<<<<<< HEAD
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
            <h1 className={styles.heroCaption}>{"Hungry? You're "}</h1>
            <h1 className={styles.heroCaption}>{"in the right place"}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
=======
      <Hero />
>>>>>>> 898be4c637e9ae3396844b33a3aae93d686882a3

      <DishesHandler />

      <div className={styles.clients}>
        <h3 className={styles.clientsHeading}>
          Trusted by the following brands
        </h3>
        <img className={styles.stutern} src="/assets/Stutern.png" />
        <img className={styles.paystack} src="/assets/Paystack.png" />
        <img className={styles.microsoft} src="/assets/Microsoft.png" />
        <img className={styles.sahara} src="/assets/Sahara.png" />
        <img className={styles.access} src="/assets/Access.png" />
      </div>
    </div>
  );
};

export default Landing;
