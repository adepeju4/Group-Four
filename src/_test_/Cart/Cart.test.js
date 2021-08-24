import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from '../../Cart';

test('should render cart page in dom', () => {
    render(
    <BrowserRouter>
        <Cart />
    </BrowserRouter> );
    const cartPage = document.querySelector('.cartBody');
    expect(cartPage).toBeInTheDocument();
});