/* eslint-disable react/prop-types */
import { useHistory } from "react-router";
import { ArrowLeft, DarkVariantCart } from "../Icons";
import styles from "../../stylesheets/topbar.module.css";
import { useState } from "react";

const TopBar = ({ checkout }) => {
  const history = useHistory();

  const [status, setStatus] = useState(false);
  const handleClick = () => history.go(-1);

  return (
    <div
      className={
        checkout
          ? [styles.topNav, styles.checkout_brand].join(" ")
          : styles.topNav
      }
    >
      <div className={styles.menu}>
        <div className={styles.brand}>
          <button onClick={handleClick} className={styles.button}>
            <ArrowLeft className="backButton" />
          </button>
          <p>foodine</p>
        </div>

        <div className={styles.navContent} id={status ? styles.menuHidden : ""}>
          <ul>
            <li>
              <button className={styles.cart}>
                <DarkVariantCart />
              </button>
            </li>
            <li>
              <p>Tosin</p>
            </li>
            <li>
              <button className={styles.logout}>Logout</button>
            </li>
          </ul>
        </div>
        <div className={status ? styles.menuMask : ""}></div>

        <button
          className={styles.menuToggle}
          onClick={() => setStatus(status === false ? true : false)}
        >
          <i className={status ? styles.open : styles.close}></i>
          <i className={status ? styles.open : styles.close}></i>
          <i className={status ? styles.open : styles.close}></i>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
