import { render, screen } from "@testing-library/react";

import { DarkVariantCart, LightVariantCart } from "../Components/Cart.js";

describe("Cart component", () => {
  test("renders light cart as an svg ", () => {
    render(<LightVariantCart />);
    const svgElement = document.querySelector(".light");
    expect(svgElement).toBeInTheDocument();
  });

  test("renders dark cart as an svg", () => {
    render(<DarkVariantCart />);
    const svg = document.querySelector(".dark");
    expect(svg).toBeInTheDocument();
  });
});
