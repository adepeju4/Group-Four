import Landing from "./Landing.js";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Cart from "./Cart.js";
import Product from "./Product.js";
import About from "./About.js";
import HelmetMetaData from "./Components/HelmetMetaData";

import NavBar from "./Components/Navbar/NavBar.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomSwitch from "./Components/CustomSwitch.js";
import Footer from "./Components/Footer.js";
import ScrollToTop from "./Components/ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <HelmetMetaData />

        <div className="content">
          <CustomSwitch>
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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </CustomSwitch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
