import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

test("should render cart page in dom", () => {
  render(
    <BrowserRouter>
      <Cart />
    </BrowserRouter>);
  const cartPageElement = document.querySelector(".cartBody");
  expect(cartPageElement).toBeInTheDocument();
});
