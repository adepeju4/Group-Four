import TopBar from "./Components/Navbar/TopBar";
import Footer from "./Components/Footer";
import styles from "./stylesheets/cart.module.css";
import CartDish from "./Components/CartDish";


const Cart = () => {
  return (
    <>
      <div className={styles.hero}>
        <TopBar />
        <div className = { styles.cartscreen}>
          <div className = {styles.cartscreen_left}>    
            <CartDish />
            <CartDish />
          </div>
          <div className = {styles.cartscreen_right}>
          <div>
            <p>Your order on foodine </p>
            <h2 className = { styles.total}> TOTAL</h2>
            <h2 className = { styles.cal}>N6,400</h2>
          </div>
          <div>
              <button className = { styles.btn}>PAY N6,400</button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

//Don't forget to wrap the code inside the return statement in parentheses.
