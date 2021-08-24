import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartOrder from "../CartOrder";

test("should render cart order component in dom", () => {
  render(
    <BrowserRouter>
    <CartOrder />
    </BrowserRouter>)
  const cartOrderElement = document.querySelector(".eachCartItem");
  expect(cartOrderElement).toBeInTheDocument();
});
