import Landing from "./Landing.js";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Cart from "./Cart.js";
import Checkout from "./Checkout.js";
import Product from "./Product.js";
import HelmetMetaData from "./Components/HelmetMetaData";

import NavBar from "./Components/Navbar/NavBar.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer.js";
import ScrollToTop from "./Components/ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <HelmetMetaData />
        <NavBar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/dishes/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
