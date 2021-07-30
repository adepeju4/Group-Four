import TopBar from "./Components/Navbar/TopBar";
import Footer from "./Components/Footer";
import styles from "./stylesheets/cart.module.css";
const Cart = () => {
  return (
    <>
      <div className={styles.hero}>
        <TopBar />^ _ ^ this is the cart page.happy development.
      </div>
      <Footer />
    </>
  );
};

export default Cart;

//Don't forget to wrap the code inside the return statement in parentheses.
