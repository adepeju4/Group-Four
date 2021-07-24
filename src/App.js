import Landing from "./Landing.js";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Cart from "./Cart.js";
import Checkout from "./Checkout.js";
import Footer from "./Components/Footer.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* insert navbar here */}

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

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
