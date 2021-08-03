import Landing from "./Landing.js";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Cart from "./Cart.js";
import Product from "./Product.js"
import { Navigation } from './Components/Navigation';

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

  // const userLogin = useSelector((state) => state.userLogin)
  // const {user} = userLogin

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

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
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
