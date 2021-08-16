import { render, screen, cleanup } from "@testing-library/react";
import CartOrder from "../CartOrder";

test('should render cart order component in dom', () => {
    render(<CartOrder />);
    const cartOrderElement = document.querySelector('.eachCartItem');
    expect(cartOrderElement).toBeInTheDocument();
});