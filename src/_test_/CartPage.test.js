import { render, screen, cleanup } from "@testing-library/react";
import Cart from "../Cart";

test('should render cart page in dom', () => {
    render(<Cart />);
    const cartPageElement = document.querySelector('.cartBody');
    expect(cartPageElement).toBeInTheDocument();
});
