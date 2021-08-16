import styles from "../stylesheets/landing.module.css";

import { Circle, RightPlate, LeftPlate } from "./Icons";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <Circle className={styles.circle} />
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div>
            <h1 className={styles.heroCaption}>{"Hungry? You're "}</h1>
            <h1 className={styles.heroCaption}>{"in the right place"}</h1>
            <p>Good food delivered to you</p>

            <div className={styles.address}>
              <p>
                <img src="/assets/pin.png" />
                Drop-off point
              </p>

              <input
                type="text"
                name="address"
                className={styles.inputAddress}
                id="address"
                placeholder="Write in your address"
              />
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="assets/food.png" className={styles.foodImg} />
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
    </>
  );
};

export default Hero;
