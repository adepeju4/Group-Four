import DishesHandler from "./Components/DishesHandler";
import Hero from "./Components/Hero";
import styles from "./stylesheets/landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Hero />

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
