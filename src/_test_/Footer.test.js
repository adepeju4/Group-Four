import { render, screen } from "@testing-library/react";

import Footer from "../Components/Footer";

test("renders footer to dom", () => {
  render(<Footer />);
  const footer = document.querySelector(".footer");
  expect(footer).toBeInTheDocument();
});
