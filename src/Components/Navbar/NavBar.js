/* eslint-disable no-unused-vars */
import styles from "../../stylesheets/landing.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import style from "../../stylesheets/signup.module.css";

import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userLogin);
  let location = useLocation();
  let history = useHistory();

  function refreshPage() {
    localStorage.removeItem("userToken");
    history.push("/");
    window.location.reload(false);
  }

  function handleBackButton() {
    history.go(-1);
  }
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          {
            location.pathname !== '/' &&
            <img className={style.img2} src="/assets/Vector.svg" onClick={handleBackButton} style={{marginRight: "2rem", cursor:"pointer"}} />
          }
        
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
                  <FaShoppingCart />
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.navLinks}>
                <Link to="/contact">Contact</Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className={[styles.signUp]}>
                    <Link onClick={refreshPage}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className={[styles.signUp]}>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li className={[styles.logIn]}>
                    <Link to="/login">Log In</Link>
                  </li>
                </>
              )}
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
    </>
  );
};

export default NavBar;
