import { render, screen } from "@testing-library/react";

import Footer from "../Components/Footer";

test("renders footer in dom", () => {
  render(<Footer />);
  const footer = document.querySelector(".footer");
  expect(footer).toBeInTheDocument();
});
