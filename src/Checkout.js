import { Circle } from "./Components/Icons.js";
import Footer from "./Components/Footer.js";
import styles from "./stylesheets/checkout.module.css";

const Checkout = () => {
  return (
    <>
      <Circle />
      <div className={styles.hero} style={{ height: "100vh" }}>
        <div className={styles.heroContent}></div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;

//Don't forget to wrap the code inside the return statement in parentheses.
